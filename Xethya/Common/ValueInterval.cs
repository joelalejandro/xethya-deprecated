using Bridge;
using Bridge.Html5;

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

        /// <summary>
        /// Checks if a value is in the defined range.
        /// </summary>
        /// <param name="value">Value to compare.</param>
        /// <returns>True if in range; otherwise, false.</returns>
        public bool ValueInRange(decimal value)
        {
            return LowerBound <= value && value <= UpperBound;
        }

        public override string ToString()
        {
            return LowerBound.ToString() + "-" + UpperBound.ToString();
        }
    }
}
