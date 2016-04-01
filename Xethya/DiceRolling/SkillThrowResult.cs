using Bridge;
using Bridge.Html5;
using Xethya.Common.Interfaces;
using System.Collections.Generic;
using Xethya.Entities;
using System.Linq;

namespace Xethya.DiceRolling
{
    public class SkillThrowResult : ChanceThrowResult, IWithModifiers 
    {
        public List<Modifier> Modifiers { get; set; }
        public int SkillValue { get; set; }

        public int ModifierSum
        {
            get
            {
                return Modifiers.Sum(m => m.Value);
            }
        }

        public int TotalRollValue
        {
            get
            {
                return SkillValue + RollSum + ModifierSum;
            }
        }

        public SkillThrowResult(int skillValue, DiceThrowResult throwResult) : base(throwResult)
        {
            SkillValue = skillValue;
            Rolls.AddRange(throwResult.Rolls);
            Modifiers = new List<Modifier>();
        }

        public ChanceThrowResult FailureRoll { get; set; }
    }
}
