using Bridge;
using Bridge.Html5;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// Contains information about the result of a chance throw.
    /// </summary>
    /// <remarks>
    /// This class is derived from DiceThrowResult.
    /// </remarks>
    public class ChanceThrowResult : DiceThrowResult
    {
        /// <summary>
        /// Establishes the type of the throw, being possible values:
        /// Failure, Success or CriticalSuccess.
        /// </summary>
        public DiceThrowType ThrowType { get; set; }

        /// <summary>
        /// Configures the chance throw's result.
        /// </summary>
        /// <param name="throwResult">The original DiceThrowResult object from the base class DiceThrow.</param>
        public ChanceThrowResult(DiceThrowResult throwResult) : base()
        {
            Rolls.AddRange(throwResult.Rolls);
        }
    }
}
