using Bridge;
using Bridge.Html5;
using Xethya.Common.Interfaces;
using System;
using System.Linq;
using System.Collections.Generic;
using Xethya.DiceRolling;

namespace Xethya.Entities
{
    public class SkilledEntity : Entity, IWithSkills
    {
        public List<Skill> Skills { get; set; }

        public SkilledEntity() : base()
        {
            Skills = new List<Skill>();
        }

        public SkilledEntity(string name) : base(name)
        {
            Skills = new List<Skill>();
        }

        public Skill GetSkillByName(string skillName)
        {
            return Skills.First(s => s.Name == skillName);
        }

        public SkillThrowResult UseSkill(string skillName)
        {
            return GetSkillByName(skillName).Use();
        }
    }
}
