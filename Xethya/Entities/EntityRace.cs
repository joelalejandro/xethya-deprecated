using System;
using System.Collections.Generic;
using Bridge;
using Bridge.Html5;
using Xethya.Common.Interfaces;
using Xethya.DiceRolling;
using Xethya.Common;

namespace Xethya.Entities
{
    public class EntityRace : INameable, IWithAttributes, IWithSkills, IWithStats
    {
        public int LifeExpectancy { get; set; }

        public EntityAlignment DefaultAlignment { get; set; }

        public string Name { get; set; }

        public List<Attribute> Attributes { get; set; }

        public List<Skill> Skills { get; set; }

        public List<Stat> Stats { get; set; }

        public ValueInterval HeightRange { get; set; }

        public Attribute GetAttributeByName(string attributeName)
        {
            return Attributes.ByName(attributeName);
        }

        public Skill GetSkillByName(string skillName)
        {
            return Skills.ByName(skillName);
        }

        public Stat GetStatByName(string statName)
        {
            return Stats.ByName(statName);
        }

        public EntityRace(string name)
        {
            Name = name;
            Attributes = new List<Attribute>();
            Skills = new List<Skill>();
            Stats = new List<Stat>();
        }

        public void DefineAttributeBoost(string attributeName, int value)
        {
            var attribute = new Attribute(attributeName);
            attribute.Value = value;
            Attributes.Add(attribute);
        }

        public void DefineStatBoost(string statName, int value)
        {
            var stat = new Stat(statName);
            var modifier = new Modifier();
            modifier.Value = value;
            stat.Modifiers.Insert(1, modifier);
            Stats.Add(stat);
        }
    }
}
