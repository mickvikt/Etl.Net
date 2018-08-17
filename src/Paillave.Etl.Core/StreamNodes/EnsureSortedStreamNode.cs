﻿using Paillave.Etl.Core;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;
using Paillave.Etl.Core.Streams;
using Paillave.Etl.Core.StreamNodes;

namespace Paillave.Etl.StreamNodes
{
    public class EnsureSortedStreamNode<TIn> : StreamNodeBase<IStream<TIn>, TIn, IEnumerable<SortCriteria<TIn>>>, ISortedStreamNodeOutput<TIn>
    {
        public ISortedStream<TIn> Output { get; }

        public EnsureSortedStreamNode(IStream<TIn> input, string name, IEnumerable<string> parentNodeNamePath, IEnumerable<SortCriteria<TIn>> arguments) 
            : base(input, name, parentNodeNamePath, arguments)
        {
            this.Output = base.CreateSortedStream(nameof(Output), input.Observable, arguments);
        }
    }
}
