using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using System.Linq;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// A dice throw represents the roll of one or more dices of
    /// a fixed number of faces. It returns a DiceThrowResult object
    /// containing the rolls of each dice. This class can be derived
    /// for implementing more advanced roll algorithms.
    /// </summary>
    public class DiceThrow
    {
        /// <summary>
        /// Contains a list of all the dices for this throw.
        /// </summary>
        protected List<Dice> _Dice { get; set; }

        /// <summary>
        /// Instantiates a dice throw.
        /// </summary>
        /// <param name="numberOfDices">How many dices will participate in the roll.</param>
        /// <param name="maxNumber">The number of faces in the dices.</param>
        public DiceThrow(int numberOfDices, int maxNumber)
        {
            _Dice = new List<Dice>();
            for (int d = 0; d < numberOfDices; d++)
            {
                _Dice.Add(new Dice(maxNumber));
            }
        }

        /// <summary>
        /// Executes the throw, saving the result of each roll
        /// in the Rolls list. This method can be overriden or
        /// extended in order to create more complex algorithms.
        /// </summary>
        /// <returns>An object containing information about the throw.</returns>
        public virtual DiceThrowResult Roll()
        {
            var dtr = new DiceThrowResult();
            dtr.Rolls = _Dice.Select(d => d.Roll()).ToList();
            return dtr;
        } 
    }
}
