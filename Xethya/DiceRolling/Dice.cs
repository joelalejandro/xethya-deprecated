using Bridge;
using Bridge.Html5;
using System;
using Xethya.Common.Randomness;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// Representa a dice, a way of getting a positive non-zero
    /// random integer.
    /// </summary>
    public class Dice
    {
        /// <summary>
        /// Stores the number of faces of the dice.
        /// </summary>
        private int _Faces;

        /// <summary>
        /// Returns the number of faces of the dice.
        /// </summary>
        public int Faces { get { return _Faces; } }

        /// <summary>
        /// Configures a dice.
        /// </summary>
        /// <param name="faces">Number of faces of the dice. Must be at least 2.</param>
        public Dice(int faces)
        {
            if (faces < 2)
            {
                throw new Exception("A dice must have at least two faces.");
            }
            _Faces = faces;
        }

        /// <summary>
        /// Rolls the dice.
        /// </summary>
        /// <returns>The rolled number.</returns>
        public int Roll()
        {
            using (var mt = new MersenneTwister())
            {
                return (int)Math.Ceiling(mt.GenerateRandom() * Faces);
            }
        }
    }
}
