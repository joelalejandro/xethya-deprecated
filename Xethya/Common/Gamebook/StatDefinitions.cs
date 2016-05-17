using Bridge;
using Bridge.Html5;
using Xethya.Entities;
using Xethya.Common.Interfaces;

namespace Xethya.Common.Gamebook
{
    public static class StatDefinitions
    {
        public static Stat Height(int heightValue)
        {
            var stat = new Stat(StatNames.Height);

            stat.CalculationCallback = (attributes, stats) =>
            {
                return heightValue.ToFeet();
            };

            return stat;
        }

        public static Stat Size(Stat heightStat)
        {
            var stat = new Stat(StatNames.Size);
            stat.Stats.Add(heightStat);

            stat.CalculationCallback = (attributes, stats) =>
            {
                Stat height = stats.ByName(StatNames.Height);

                ValueInterval smallSize = "1,3".AsValueInterval();
                ValueInterval mediumSize = "4,7".AsValueInterval();
                ValueInterval largeSize = "8,11".AsValueInterval();

                if (height.Value > 11)
                {
                    return 4;
                }
                else if (largeSize.ValueInRange(height.Value))
                {
                    return 3;
                }
                else if (mediumSize.ValueInRange(height.Value))
                {
                    return 2;
                }
                else if (smallSize.ValueInRange(height.Value))
                {
                    return 1;
                }

                return 0;
            };

            return stat;
        }

        public static Stat CarryingCapacity(Attribute strengthAttribute, Stat sizeStat = null)
        {
            var stat = new Stat(StatNames.CarryingCapacity);

            stat.Attributes.Add(strengthAttribute);

            if (sizeStat != null)
            {
                stat.Stats.Add(sizeStat);

                var modifier = new Modifier(StatNames.Size);
                var sizeMultiplier = new[] { 0.5M, 1M, 2M, 2.5M };
                modifier.Value = strengthAttribute.ComputedValue * sizeMultiplier[((int)sizeStat.Value) - 1];

                stat.Modifiers.Add(modifier);
            }

            stat.CalculationCallback = (attributes, stats) =>
            {
                var strength = attributes.ByName(AttributeNames.Strength);
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
