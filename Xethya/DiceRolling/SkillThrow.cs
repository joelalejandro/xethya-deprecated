using Bridge;
using Bridge.Html5;

namespace Xethya.DiceRolling
{
    public class SkillThrow : ChanceThrow
    {
        public int SkillValue { get; set; }

        public SkillThrow(int skillValue) : base()
        {
            SkillValue = skillValue;
        }

        public new SkillThrowResult Roll()
        {
            var result = base.Roll();
            return new SkillThrowResult(SkillValue, result);
        }
    }
}
