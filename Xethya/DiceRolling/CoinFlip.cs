﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// A dice implementation of two faces, such as the
    /// flip of a coin. Allows to calculate boolean
    /// decisions.
    /// </summary>
    public class CoinFlip : Dice
    {
        /// <summary>
        /// Instantiates a coinflip-type dice, with two faces.
        /// </summary>
        public CoinFlip() : base(2)
        {
            
        }
    }
}
