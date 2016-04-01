using Bridge;
using Bridge.Html5;
using System;
using Xethya.Common;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// Defines the configuration for a chance throw.
    /// </summary>
    public class ChanceThrowSettings
    {
        /// <summary>
        /// The numeric range in which a roll will be considered Failure.
        /// </summary>
        public ValueInterval FailureRange { get; set; }

        /// <summary>
        /// The numeric range in which a roll will be considered Success.
        /// </summary>
        public ValueInterval SuccessRange { get; set; }

        /// <summary>
        /// The numeric range in which a roll will be considered CriticalSuccess.
        /// </summary>
        public ValueInterval CriticalSuccessRange { get; set; }

        /// <summary>
        /// Instantiates the default configuration for a chance throw.
        /// Thus, a roll of 1 thru 20 will be of Failure; a roll of 21 thru 90
        /// will be of Success; and a roll of 91 thru 100 will be of Critical
        /// Success.
        /// </summary>
        public ChanceThrowSettings()
        {
            FailureRange = new ValueInterval(1, 20);
            SuccessRange = new ValueInterval(21, 90);
            CriticalSuccessRange = new ValueInterval(91, 100);
        }

        /// <summary>
        /// Instantiates a configuration object for a chance throw.
        /// </summary>
        /// <param name="failureRange">The range of values for a roll to be a Failure.</param>
        /// <param name="successRange">The range of values for a roll to be a Success.</param>
        /// <param name="criticalSuccessRange">The range of values for a roll to be a Critical Success.</param>
        public ChanceThrowSettings(ValueInterval failureRange,
            ValueInterval successRange,
            ValueInterval criticalSuccessRange)
        {
            FailureRange = failureRange;
            SuccessRange = successRange;
            CriticalSuccessRange = criticalSuccessRange;
        }

        /// <summary>
        /// Instantiates a configuration object for a chance throw.
        /// </summary>
        /// <param name="failureLowerBound">The minimum value for a roll to be a Failure.</param>
        /// <param name="failureUpperBound">The maximum value for a roll to be a Failure.</param>
        /// <param name="successLowerBound">The minimum value for a roll to be a Success.</param>
        /// <param name="successUpperBound">The maximum value for a roll to be a Success.</param>
        /// <param name="criticalSuccessLowerBound">The minimum value for a roll to be a Critical Success.</param>
        /// <param name="criticalSuccessUpperBound">The maximum value for a roll to be a Critical Success.</param>
        public ChanceThrowSettings(byte failureLowerBound,
            byte failureUpperBound, byte successLowerBound,
            byte successUpperBound, byte criticalSuccessLowerBound,
            byte criticalSuccessUpperBound)
        {
            FailureRange = new ValueInterval(failureLowerBound, failureUpperBound);
            SuccessRange = new ValueInterval(successLowerBound, successUpperBound);
            CriticalSuccessRange = new ValueInterval(criticalSuccessLowerBound, criticalSuccessUpperBound);
        }
    }
}
