using System;
using System.Collections.Generic;
using Bridge;
using Bridge.Html5;
using System.Linq;
using Xethya.Common.Interfaces;
using Xethya.Entities;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// A skill throw derives from a chance throw, linked to a
    /// skill. It runs a d100 throw and sums to the result
    /// the skill's computed value (= core value + modifier sum)
    /// and the skill's associated attributes' values combined.
    /// </summary>
    public class SkillThrow : ChanceThrow, IWithModifiers
    {
        /// <summary>
        /// References the skill being executed for the roll.
        /// </summary>
        public Skill SkillBeingThrown { get; set; }

        /// <summary>
        /// Contains all of the modifiers referenced by the skill's attributes.
        /// </summary>
        public List<Modifier> Modifiers { get; set; }

        /// <summary>
        /// Returns the sum of all registered modifiers' value.
        /// </summary>
        public decimal ModifierSum
        {
            get
            {
                return Modifiers.Sum(m => m.Value);
            }
        }

        /// <summary>
        /// Prepares a skill throw.
        /// </summary>
        /// <param name="skill">The skill being used.</param>
        public SkillThrow(Skill skill) : base()
        {
            SkillBeingThrown = skill;
        }

        /// <summary>
        /// Rolls the dice, considering the skill's computed value.
        /// </summary>
        /// <returns>The result of the skill throw, indicating if the roll
        /// was a failure or not.</returns>
        public new SkillThrowResult Roll()
        {
            var result = base.Roll();
            return new SkillThrowResult(SkillBeingThrown.ComputedValue.As<decimal>(), ModifierSum, result);
        }
    }
}
