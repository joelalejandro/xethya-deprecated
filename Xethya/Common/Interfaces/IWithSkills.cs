using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.DiceRolling;
using Xethya.Entities;

namespace Xethya.Common.Interfaces
{
    public interface IWithSkills
    {
        List<Skill> Skills { get; set; }
        SkillThrowResult UseSkill(string skillName);
        Skill GetSkillByName(string skillName);
    }
}
