using FundProcess.Pms.DataAccess.Schemas.Entity.Tables;

namespace FundProcess.Pms.DataAccess.Schemas.Pms.Tables
{
    public class Future : Derivative
    {
        public decimal? StrikePrice { get; set; }
    }
}