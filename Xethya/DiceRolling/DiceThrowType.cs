using Bridge;
using Bridge.Html5;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// Defines qualifications for a chance throw.
    /// </summary>
    public enum DiceThrowType
    {
        /// <summary>
        /// Represents a failed throw.
        /// </summary>
        Failure,

        /// <summary>
        /// Represents a regular throw (can be considered successful).
        /// </summary>
        Normal,

        /// <summary>
        /// Represents a rare throw (can be considered critically successful).
        /// </summary>
        Critical
    }
}
