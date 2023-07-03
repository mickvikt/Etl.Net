﻿using Paillave.Etl.Core;
using System;
using System.Collections.Generic;
using System.Text;
using Paillave.Etl.Reactive.Operators;
using System.Linq;
using System.Reflection;
using System.Linq.Expressions;
using System.Data;
using System.Data.Odbc;
using System.Data.OleDb;
using System.Text.RegularExpressions;

namespace Paillave.Etl.SqlServer
{
    public class SqlServer2000SaveStreamNode<TIn, TStream, TValue> : StreamNodeBase<TIn, TStream, SqlServerSaveCommandArgs<TIn, TStream, TValue>>
        where TIn : class
        where TStream : IStream<TIn>
    {
        private static IDictionary<string, PropertyInfo> _inPropertyInfos = typeof(TIn).GetProperties().ToDictionary(i => i.Name, StringComparer.InvariantCultureIgnoreCase);
        public override ProcessImpact PerformanceImpact => ProcessImpact.Heavy;
        public override ProcessImpact MemoryFootPrint => ProcessImpact.Light;
        public SqlServer2000SaveStreamNode(string name, SqlServerSaveCommandArgs<TIn, TStream, TValue> args) : base(name, args) { }
        protected override TStream CreateOutputStream(SqlServerSaveCommandArgs<TIn, TStream, TValue> args)
        {
            var ret = args.SourceStream.Observable.Do(i => ProcessItem(args.GetValue(i), args.ConnectionName));
            return base.CreateMatchingStream(ret, args.SourceStream);
        }
        private string _sqlStatement = null;
        private List<PropertyInfo> _pivot = null;
        private List<PropertyInfo> _computed = null;
        private string GetSqlStatement()
        {
            if (_sqlStatement == null)
            {
                _pivot = base.Args.Pivot == null ? new List<PropertyInfo>() : base.Args.Pivot.GetPropertyInfos();
                _computed = base.Args.Computed == null ? new List<PropertyInfo>() : base.Args.Computed.GetPropertyInfos();
                _sqlStatement = CreateSqlQuery(base.Args.Table, typeof(TIn).GetProperties().ToList(), _pivot, _computed);
            }
            return _sqlStatement;
        }
        private void ProcessItem(TValue item, string connectionName)
        {
            var resolver = this.ExecutionContext.DependencyResolver;
            var sqlConnection = connectionName == null ? resolver.Resolve<IDbConnection>() : resolver.Resolve<IDbConnection>(connectionName);
            // List<PropertyInfo> pivot = base.Args.Pivot == null ? new List<PropertyInfo>() : base.Args.Pivot.GetPropertyInfos();
            // List<PropertyInfo> computed = base.Args.Computed == null ? new List<PropertyInfo>() : base.Args.Computed.GetPropertyInfos();
            // var sqlQuery = CreateSqlQuery(base.Args.Table, typeof(TIn).GetProperties().ToList(), pivot, computed);
            var sqlStatement = GetSqlStatement();
            var command = sqlConnection.CreateCommand();
            command.CommandText = sqlStatement;
            command.CommandType = CommandType.Text;
            // var command = new SqlCommand(sqlStatement, sqlConnection);
            // Regex getParamRegex = new Regex(@"@(?<param>\w*)", RegexOptions.Compiled | RegexOptions.IgnoreCase);
            // var allMatches = getParamRegex.Matches(base.Args.SqlQuery).ToList().Select(match => match.Groups["param"].Value).Distinct().ToList();
            foreach (var parameterName in _inPropertyInfos.Keys.Except(_computed.Select(i => i.Name)))
            {
                var parameter = command.CreateParameter();
                parameter.ParameterName = $"@{parameterName}";
                parameter.Value = _inPropertyInfos[parameterName].GetValue(item) ?? DBNull.Value;
                command.Parameters.Add(parameter);
                // command.Parameters.Add(new SqlParameter($"@{parameterName}", _inPropertyInfos[parameterName].GetValue(item) ?? DBNull.Value));
            }
            
            if (sqlConnection is OdbcConnection or OleDbConnection)
            {
                command = AdjustCommandForOdbcOrOleDb(sqlConnection, command);
            }
            
            using (var reader = command.ExecuteReader())
                if (reader.Read())
                    UpdateRecord(reader, item);
        }

        private static IDbCommand AdjustCommandForOdbcOrOleDb(IDbConnection connection, IDbCommand command)
        {
           var adjustedCommand = connection.CreateCommand();
           adjustedCommand.CommandType = CommandType.Text;
           
           var regex = new Regex(@"@\w+");
           adjustedCommand.CommandText = regex.Replace(command.CommandText, "?");

           var parameterUsages = regex
               .Matches(command.CommandText)
               .Select(match => match.Value);

           foreach (var parameterName in parameterUsages)
           {
               var parameter = adjustedCommand.CreateParameter();
               parameter.ParameterName = parameterName;
               parameter.Value = ((IDataParameter)command.Parameters[parameterName]).Value;
               adjustedCommand.Parameters.Add(parameter);
           }

           return adjustedCommand;
        }
        
        private void UpdateRecord(IDataReader record, TValue item)
        {
            IDictionary<string, object> values = new Dictionary<string, object>();
            for (int i = 0; i < record.FieldCount; i++)
            {
                var recordValue = record.GetValue(i);
                values[record.GetName(i)] = recordValue == DBNull.Value
                    ? null
                    : Convert.ChangeType(recordValue, record.GetFieldType(i));
            }
            var updates = _inPropertyInfos.Join(values, i => i.Key, i => i.Key, (l, r) => new { Target = l.Value, NewValue = r.Value }, StringComparer.InvariantCultureIgnoreCase).ToList();
        }

        private string CreateSqlQuery(string table, List<PropertyInfo> allProperties, List<PropertyInfo> pivot, List<PropertyInfo> computed)
        {
            var pivotsNames = pivot.Select(i => i.Name).ToList();
            var computedNames = computed.Select(i => i.Name).ToList();
            var allPropertyNames = allProperties.Select(i => i.Name).ToList();
            List<string> relevantProps;
            StringBuilder sb = new StringBuilder();
            if (pivot.Count > 0)
            {
                var pivotCondition = string.Join(" AND ", pivot.Select(p => $"p.{p.Name} = @{p.Name}"));
                sb.AppendLine($"if(exists(select 1 from {table} as p where {pivotCondition} ))");
                relevantProps = allPropertyNames.Except(pivotsNames).Except(computedNames).ToList();
                var setStatement = string.Join(", ", relevantProps.Select(i => $"{i} = @{i}").ToList());
                sb.AppendLine($"update p set {setStatement} from {table} as p where {pivotCondition};");
                sb.AppendLine("else");
            }
            var propsToInsert = allPropertyNames.Except(computedNames).ToList();
            sb.AppendLine($"insert into {table} ({string.Join(", ", propsToInsert)})");
            sb.AppendLine($"values ({string.Join(", ", propsToInsert.Select(i => $"@{i}"))});");
            sb.AppendLine($"select * from {table} where {string.Join(" AND ", propsToInsert.Select(p => $"{p} = @{p}"))};");
            return sb.ToString();
        }
    }
}
