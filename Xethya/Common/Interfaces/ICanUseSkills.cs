using Bridge;
using Bridge.Html5;
using Xethya.DiceRolling;

namespace Xethya.Common.Interfaces
{
    public interface ICanUseSkills
    {
        /// <summary>
        /// Allows the implementing object to use a skill,
        /// and returns the result of the skill throw.
        /// </summary>
        /// <param name="skillName">The skill's name.</param>
        /// <returns>The skill's dice throw result.</returns>
        SkillThrowResult UseSkill(string skillName);
    }
}
