using Bridge;
using Bridge.Html5;
using Xethya.Common.Interfaces;
using System;
using System.Linq;
using System.Collections.Generic;
using Xethya.DiceRolling;

namespace Xethya.Entities
{
    /// <summary>
    /// A skilled entity is a derivative of the base Entity class,
    /// allowing to register skills associated to it. Thus, this entity
    /// can perform actions.
    /// </summary>
    public abstract class SkilledEntity : Entity, IWithSkills, ICanUseSkills
    {
        /// <summary>
        /// Contains every action this entity can perform.
        /// </summary>
        public List<Skill> Skills { get; set; }

        /// <summary>
        /// Creates a new instance of the SkilledEntity class.
        /// </summary>
        public SkilledEntity() : base()
        {
            Skills = new List<Skill>();
        }

        /// <summary>
        /// Creates a new skilled entity, with a given name.
        /// </summary>
        /// <param name="name">The entity's name.</param>
        public SkilledEntity(string name) : base(name)
        {
            Skills = new List<Skill>();
        }

        /// <summary>
        /// Gets a skill from the Skills list, by its name.
        /// </summary>
        /// <param name="skillName">The skill's name.</param>
        /// <returns>The requested skill.</returns>
        public Skill GetSkillByName(string skillName)
        {
            return Skills.First(s => s.Name == skillName);
        }

        /// <summary>
        /// Executes a given action, by its skill name.
        /// This is a proxy method to call the Use() method
        /// of the Skill class.
        /// </summary>
        /// <param name="skillName">The skill to invoke.</param>
        /// <returns>The outcome of the skill's invocation.</returns>
        public SkillThrowResult UseSkill(string skillName)
        {
            return GetSkillByName(skillName).Use();
        }
    }
}
