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
        /// Fetches a skill by its name.
        /// </summary>
        /// <param name="skillName">The skill's name.</param>
        /// <returns>The requested Skill object.</returns>
        Skill GetSkillByName(string skillName);
    }
}
