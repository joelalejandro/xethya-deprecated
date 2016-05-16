using Bridge;
using Bridge.Html5;
using Xethya.Entities;

namespace Xethya.Common.Gamebook
{
    public static class SkillDefinitions
    {
        public static Skill Athletics(Attribute strengthAttribute)
        {
            var skill = new Skill(SkillNames.Athletics);
            skill.Attributes.Add(strengthAttribute);
            return skill;
        }

        public static Skill Acrobatics(Attribute dexterityAttribute)
        {
            var skill = new Skill(SkillNames.Acrobatics);
            skill.Attributes.Add(dexterityAttribute);
            return skill;
        }

        public static Skill SleightOfHand(Attribute dexterityAttribute)
        {
            var skill = new Skill(SkillNames.SleightOfHand);
            skill.Attributes.Add(dexterityAttribute);
            return skill;
        }

        public static Skill Stealth(Attribute dexterityAttribute)
        {
            var skill = new Skill(SkillNames.Stealth);
            skill.Attributes.Add(dexterityAttribute);
            return skill;
        }

        public static Skill Arcana(Attribute intelligenceAttribute)
        {
            var skill = new Skill(SkillNames.Arcana);
            skill.Attributes.Add(intelligenceAttribute);
            return skill;
        }

        public static Skill History(Attribute intelligenceAttribute)
        {
            var skill = new Skill(SkillNames.History);
            skill.Attributes.Add(intelligenceAttribute);
            return skill;
        }

        public static Skill Investigation(Attribute intelligenceAttribute)
        {
            var skill = new Skill(SkillNames.Investigation);
            skill.Attributes.Add(intelligenceAttribute);
            return skill;
        }

        public static Skill Nature(Attribute intelligenceAttribute)
        {
            var skill = new Skill(SkillNames.Nature);
            skill.Attributes.Add(intelligenceAttribute);
            return skill;
        }

        public static Skill Religion(Attribute intelligenceAttribute)
        {
            var skill = new Skill(SkillNames.Religion);
            skill.Attributes.Add(intelligenceAttribute);
            return skill;
        }

        public static Skill AnimalHandling(Attribute wisdomAttribute)
        {
            var skill = new Skill(SkillNames.AnimalHandling);
            skill.Attributes.Add(wisdomAttribute);
            return skill;
        }

        public static Skill Insight(Attribute wisdomAttribute)
        {
            var skill = new Skill(SkillNames.Insight);
            skill.Attributes.Add(wisdomAttribute);
            return skill;
        }

        public static Skill Medicine(Attribute wisdomAttribute)
        {
            var skill = new Skill(SkillNames.Medicine);
            skill.Attributes.Add(wisdomAttribute);
            return skill;
        }

        public static Skill Perception(Attribute wisdomAttribute)
        {
            var skill = new Skill(SkillNames.Perception);
            skill.Attributes.Add(wisdomAttribute);
            return skill;
        }

        public static Skill Survival(Attribute wisdomAttribute)
        {
            var skill = new Skill(SkillNames.Survival);
            skill.Attributes.Add(wisdomAttribute);
            return skill;
        }

        public static Skill Deception(Attribute charismaAttribute)
        {
            var skill = new Skill(SkillNames.Deception);
            skill.Attributes.Add(charismaAttribute);
            return skill;
        }

        public static Skill Intimidation(Attribute charismaAttribute)
        {
            var skill = new Skill(SkillNames.Intimidation);
            skill.Attributes.Add(charismaAttribute);
            return skill;
        }

        public static Skill Performance(Attribute charismaAttribute)
        {
            var skill = new Skill(SkillNames.Performance);
            skill.Attributes.Add(charismaAttribute);
            return skill;
        }

        public static Skill Persuasion(Attribute charismaAttribute)
        {
            var skill = new Skill(SkillNames.Persuasion);
            skill.Attributes.Add(charismaAttribute);
            return skill;
        }

    }
}
