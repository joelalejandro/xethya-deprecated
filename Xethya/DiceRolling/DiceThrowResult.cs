using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using System.Linq;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// Contains information about the result of a dice throw.
    /// </summary>
    /// <remarks>
    /// This class can be extended to implement structures with
    /// more information about a throw result.
    /// </remarks>
    public class DiceThrowResult
    {
        /// <summary>
        /// Contains all of the rolled number.
        /// </summary>
        public List<int> Rolls { get; set; }

        /// <summary>
        /// Returns the sum of all rolled numbers.
        /// </summary>
        public int RollSum
        {
            get
            {
                return Rolls.Sum();
            }
        }

        /// <summary>
        /// Instantiates the data structure.
        /// </summary>
        public DiceThrowResult()
        {
            Rolls = new List<int>();
        }
    }
}
