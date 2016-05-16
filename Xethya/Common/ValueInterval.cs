using Bridge;
using Bridge.Html5;
using System;
using System.Collections;
using System.Linq;

namespace Xethya.Common
{
    /// <summary>
    /// Represents a range of numbers, described through boundaries.
    /// Used for dice rolling.
    /// </summary>
    public class ValueInterval
    {
        /// <summary>
        /// Represents the maximum number in this range.
        /// </summary>
        public int UpperBound { get; set; }

        /// <summary>
        /// Represents the minimum number in this range.
        /// </summary>
        public int LowerBound { get; set; }
        
        /// <summary>
        /// Represents a range of numbers.
        /// </summary>
        /// <param name="lowerBound">Minimum range value.</param>
        /// <param name="upperBound">Maximum range value.</param>
        public ValueInterval(int lowerBound, int upperBound)
        {
            UpperBound = upperBound;
            LowerBound = lowerBound;
        }

        /// <summary>
        /// Checks if a value is in the defined range.
        /// </summary>
        /// <param name="value">Value to compare.</param>
        /// <returns>True if in range; otherwise, false.</returns>
        public bool ValueInRange(int value)
        {
            return LowerBound <= value && value <= UpperBound;
        }

        public override string ToString()
        {
            return LowerBound.ToString() + "-" + UpperBound.ToString();
        }
    }

    public static class ValueIntervalExtensions
    {
        public static ValueInterval AsValueInterval(this int[] array)
        {
            if (array.Length != 2)
            {
                throw new ArgumentException("Array must have two elements to create a ValueInterval.");
            }
            return new ValueInterval(array[0], array[1]);
        }

        public static ValueInterval AsValueInterval(this Tuple<int, int> tuple)
        {
            return new ValueInterval(tuple.Item1, tuple.Item2);
        }

        public static ValueInterval AsValueInterval(this string txt)
        {
            ValueInterval range = null;
            var allowedDelimiters = new[] { ',', ';', ':', '~' };
            if (!allowedDelimiters.Any(d => txt.Contains(d)))
            {
                throw new FormatException("In order for a string to become a ValueInterval, it must follow any of these formats: x,y x;y x:y x~y");
            }
            bool delimiterFound = false;
            while (!delimiterFound)
            {
                var delimiter = allowedDelimiters.Shift().ToString();
                delimiterFound = txt.Contains(delimiter);
                if (delimiterFound)
                {
                    var data = txt.Split(delimiter);
                    if (data.Length != 2)
                    {
                        throw new FormatException("In order for a string to become a ValueInterval, it must follow any of these formats: x,y x;y x:y x~y");
                    }
                    else
                    {
                        range = new ValueInterval(data[0].As<int>(), data[1].As<int>());
                    }
                }
            }
            if (range == null)
            {
                throw new FormatException("In order for a string to become a ValueInterval, it must follow any of these formats: x,y x;y x:y x~y");
            }
            return range;
        }
    }
}
