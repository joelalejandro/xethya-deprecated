using Bridge;
using Bridge.Html5;
using Xethya.Entities;
using Xethya.Common.Interfaces;

namespace Xethya.Common.Gamebook
{
    public static class StatDefinitions
    {
        public static Stat CarryingCapacity(Attribute strengthAttribute, Stat sizeStat = null)
        {
            var stat = new Stat(StatNames.CarryingCapacity);

            stat.Attributes.Add(strengthAttribute);

            if (sizeStat != null)
                stat.Stats.Add(sizeStat);

            stat.CalculationCallback = (attributes, stats) =>
            {
                Stat size = null;

                try { size = stats.ByName(StatNames.Size); } catch { }
                var strength = attributes.ByName(AttributeNames.Strength);
                
                if (size != null)
                {
                    // Do something with size.
                }

                return strength.ComputedValue * 15;
            };

            return stat;
        }

        public static Stat ObjectHandlingCapacity(Stat carryingCapacity)
        {
            var stat = new Stat(StatNames.ObjectHandlingCapacity);
            stat.Stats.Add(carryingCapacity);
            stat.CalculationCallback = (attributes, stats) =>
            {
                return stats.ByName(StatNames.CarryingCapacity).ComputedValue * 2;
            };
            return stat;
        }

        public static Stat HitPoints(Attribute constitution)
        {
            var stat = new Stat(StatNames.HitPoints);
            stat.Attributes.Add(constitution);
            stat.CalculationCallback = (attributes, stats) =>
            {
                return attributes.ByName(AttributeNames.Constitution).ModifierSum;
            };
            return stat;
        }
    }
}
