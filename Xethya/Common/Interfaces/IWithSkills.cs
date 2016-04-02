using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.DiceRolling;
using Xethya.Entities;

namespace Xethya.Common.Interfaces
{
    /// <summary>
    /// Apply this interface to any object that requires
    /// the usage of skills.
    /// </summary>
    public interface IWithSkills
    {
        /// <summary>
        /// Contains the implementing object's skills.
        /// </summary>
        List<Skill> Skills { get; set; }

        /// <summary>
        /// Allows the implementing object to use a skill,
        /// and returns the result of the skill throw.
        /// </summary>
        /// <param name="skillName">The skill's name.</param>
        /// <returns>The skill's dice throw result.</returns>
        SkillThrowResult UseSkill(string skillName);

        /// <summary>
        /// Fetches a skill by its name.
        /// </summary>
        /// <param name="skillName">The skill's name.</param>
        /// <returns>The requested Skill object.</returns>
        Skill GetSkillByName(string skillName);
    }
}
