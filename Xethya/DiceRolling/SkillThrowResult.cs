using Bridge;
using Bridge.Html5;
using Xethya.Common.Interfaces;
using System.Collections.Generic;
using Xethya.Entities;
using System.Linq;

namespace Xethya.DiceRolling
{
    /// <summary>
    /// Contains data about the outcome of using a skill. A skill throw result
    /// is derived from a chance throw, but, as the SkillThrow class, it considers
    /// the skill's computed value (including modifiers) and the modifiers for
    /// each of the skill's designated attributes.
    /// </summary>
    public class SkillThrowResult : ChanceThrowResult
    {
        /// <summary>
        /// References the skill's (computed) value.
        /// </summary>
        public decimal SkillValue { get; set; }

        /// <summary>
        /// References the sum of each of the modifiers associated to
        /// each of the skill's attributes.
        /// </summary>
        public decimal SkillAttributeModifiersValue { get; set; }

        /// <summary>
        /// Returns the final sum of the dice throw. It sums the skill's
        /// computed value and the roll's value, as well as the modifiers
        /// of the skill's attributes.
        /// </summary>
        public decimal TotalRollValue
        {
            get
            {
                return SkillValue + RollSum + SkillAttributeModifiersValue;
            }
        }

        /// <summary>
        /// Instantiates the skill throw's result structure.
        /// </summary>
        /// <param name="skillValue">The skill's computed value.</param>
        /// <param name="skillAttributeModifiersValue">The sum of the modifiers of the attributes contained in the skill.</param>
        /// <param name="throwResult">The dice roll result.</param>
        public SkillThrowResult(decimal skillValue, int skillAttributeModifiersValue, DiceThrowResult throwResult) : base(throwResult)
        {
            SkillValue = skillValue;
            SkillAttributeModifiersValue = skillAttributeModifiersValue;
            Rolls.AddRange(throwResult.Rolls);
        }

        /// <summary>
        /// If the skill has failed, this contains more data about
        /// how severe the failure was. For instance, it allows to
        /// ascertain if it was a critical failure or an almost-successful
        /// throw.
        /// </summary>
        public ChanceThrowResult FailureRoll { get; set; }
    }
}
