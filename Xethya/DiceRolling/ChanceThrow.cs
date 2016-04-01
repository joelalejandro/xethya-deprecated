using Bridge;
using Bridge.Html5;
using Xethya.Common;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// A chance throw is an extension of the DiceThrow class, designed to
    /// throw a single d100. The throw result, extended from DiceThrowResult,
    /// is categorised in a failed, successful or critically-successful roll.
    /// </summary>
    public class ChanceThrow : DiceThrow
    {
        /// <summary>
        /// Stores the configuration of the chance throw, defining
        /// the value range for each throw qualification.
        /// </summary>
        protected ChanceThrowSettings _Settings { get; set; }

        /// <summary>
        /// Prepares a chance throw with a single d100.
        /// </summary>
        public ChanceThrow() : base(1, 100)
        {
            _Settings = new ChanceThrowSettings();
        }

        /// <summary>
        /// Prepares a chance throw with a single d100, allowing to
        /// change the qualification bounds via a ChanceThrowSettings
        /// instance.
        /// </summary>
        public ChanceThrow(ChanceThrowSettings settings) : base(1, 100)
        {
            _Settings = settings;
        }

        /// <summary>
        /// Rolls the chance throw.
        /// </summary>
        /// <remarks>
        /// Note that this method replaces DiceThrow.Roll() by
        /// changing the return type from DiceThrowResult to a derived
        /// ChanceThrowResult class.
        /// </remarks>
        /// <returns>The rolled dice, with a qualification of Failure, Success or Critical Success.</returns>
        public new ChanceThrowResult Roll()
        {
            var diceThrow = base.Roll();
            var ctr = new ChanceThrowResult(diceThrow);

            if (_Settings.FailureRange.ValueInRange(diceThrow.RollSum))
            {
                ctr.ThrowType = DiceThrowType.Failure;
            }
            else if (_Settings.SuccessRange.ValueInRange(diceThrow.RollSum))
            {
                ctr.ThrowType = DiceThrowType.Normal;
            }
            else if (_Settings.CriticalSuccessRange.ValueInRange(diceThrow.RollSum))
            {
                ctr.ThrowType = DiceThrowType.Critical;
            }

            return ctr;
        }
    }
}
