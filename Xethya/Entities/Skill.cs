using Bridge;
using Bridge.Html5;
using Xethya.Common;
using Xethya.Common.Interfaces;
using System;
using System.Collections.Generic;
using Xethya.DiceRolling;
using System.Linq;

namespace Xethya.Entities
{
    /// <summary>
    /// A skill is an ability performable by any entity that derives
    /// from SkilledEntity. It has the same base components of an
    /// attribute (thus, it can be altered with modifiers). Also, 
    /// a skill can be affected by attributes: for instance, a "Punch"
    /// skill will be affected by a "Strength" attribute and an "Agility"
    /// attribute.
    /// </summary>
    public class Skill : Attribute, IWithAttributes, IModifierSource
    {
        /// <summary>
        /// Contains the required attributes for the skill.
        /// </summary>
        public List<Attribute> Attributes { get; set; }

        /// <summary>
        /// Gets an associated attribute by its name.
        /// </summary>
        /// <param name="attributeName">The attribute's name.</param>
        /// <returns>The requested attribute.</returns>
        public Attribute GetAttributeByName(string attributeName)
        {
            return Attributes.First(a => a.Name == attributeName);
        }

        /// <summary>
        /// Creates a new skill with a given name, with a default
        /// value range from 0 to the 32-bit limit (due to Attribute
        /// base constructor).
        /// </summary>
        /// <param name="name">The skill's name.</param>
        public Skill(string name) : base(name)
        {        
            Attributes = new List<Attribute>();
        }

        /// <summary>
        /// Creates a new skill with a given name and minimum-maximum
        /// allowed values.
        /// </summary>
        /// <param name="name">The skill's name.</param>
        /// <param name="valueRange">An instance of ValueInterval containing the skill's value range.</param>
        public Skill(string name, ValueInterval valueRange) : base(name, valueRange)
        {
            Attributes = new List<Attribute>();
        }

        /// <summary>
        /// Invokes the usage of the skill. This will roll a Skill throw,
        /// and calculate the outcome of the skill's execution. If the
        /// skill fails to be used, the FailureRoll property will contain
        /// data regarding the severity of the failure.
        /// </summary>
        /// <returns>The outcome of the skill's execution, with a SkillThrowResult instance.</returns>
        public SkillThrowResult Use()
        {
            var st = new SkillThrow(this);
            var str = st.Roll();
            foreach (var attribute in Attributes)
            {
                str.SkillAttributeModifiersValue += attribute.ModifierSum;
            }
            if (str.ThrowType == DiceThrowType.Failure)
            {
                str.FailureRoll = new ChanceThrow().Roll();
            }
            else
            {
                str.FailureRoll = null;
            }
            return str;
        }
    }

    public static class SkillExtensions
    {
        public static Skill ByName(this List<Skill> obj, string name)
        {
            return obj.Single(s => s.Name == name);
        }
    }
}