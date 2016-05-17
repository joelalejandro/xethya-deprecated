using Bridge;
using Bridge.Html5;
using System;

namespace Xethya.Common
{
    public static class MetricExtensions
    {
        /// <summary>
        /// Converts an integer (measured in centimeters)
        /// to inches.
        /// </summary>
        /// <param name="centimeters"></param>
        /// <returns>A value in inches.</returns>
        public static decimal ToInches(this int centimeters)
        {
            return centimeters * 0.393701M;
        }

        /// <summary>
        /// Converts an integer (measured in centimeters)
        /// to feet.
        /// </summary>
        /// <param name="centimeters"></param>
        /// <returns>A value in feet.</returns>
        public static decimal ToFeet(this int centimeters)
        {
            return centimeters * 0.0328084M;
        }
    }
}
