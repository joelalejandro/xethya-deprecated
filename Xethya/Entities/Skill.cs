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
    public class Skill : Attribute, IWithAttributes, IModifierSource
    {
        public List<Attribute> Attributes { get; set; }

        public Attribute GetAttributeByName(string attributeName)
        {
            return Attributes.First(a => a.Name == attributeName);
        }

        public Skill(string name) : base(name)
        {        
            Attributes = new List<Attribute>();
        }

        public Skill(string name, ValueInterval valueRange) : base(name, valueRange)
        {
            Attributes = new List<Attribute>();
        }

        public SkillThrowResult Use()
        {
            var st = new SkillThrow(Convert.ToInt32(Value));
            var str = st.Roll();
            str.Modifiers.AddRange(Modifiers);
            foreach (var attribute in Attributes)
            {
                var modifier = new Modifier();
                modifier.Source = "attribute@" + attribute.ID;
                modifier.Value = attribute.ModifierSum;
                str.Modifiers.Add(modifier);
            }
            if (str.ThrowType == DiceThrowType.Failure)
            {
                str.FailureRoll = new ChanceThrow().Roll();
            }
            return str;
        }
    }
}