using Bridge;
using Bridge.Html5;
using System.Linq;
using System.Collections.Generic;
using Xethya.Common;
using Xethya.Common.Gamebook;
using Xethya.Common.Interfaces;
using System;

namespace Xethya.Entities
{
    /// <summary>
    /// A living entity is, basically, any living creature. It derives from
    /// the SkilledEntity class, thus it has attributes and skills. It includes
    /// some basic attributes declared, based on the 5th SRD specs.
    /// 
    /// A living entity must belong to an EntityRace class. This EntityRace
    /// defines aspects of the entity that adjust its attributes, skills and
    /// stats accordingly.
    /// </summary>
    /// <seealso cref="http://dnd5e.info/"/>
    public abstract class LivingEntity : SkilledEntity, IWithStats
    {
        public bool HasDeityTraits
        {
            get
            {
                return Attributes.Any(a => a.Value >= 27);
            }
        }

        public bool IsPureDeity
        {
            get
            {
                return Attributes.All(a => a.Value >= 27);
            }
        }

        public int Age { get; set; }

        public bool IsBeyondLifeExpectancy
        {
            get
            {
                return !(new ValueInterval(1, Race.LifeExpectancy).ValueInRange(Age));
            }
        }

        /// <summary>
        /// Allows the implementing object to hold stats.
        /// </summary>
        public List<Stat> Stats { get; set; }

        /// <summary>
        /// Defines the race of this living entity.
        /// </summary>
        public EntityRace Race { get; set; }

        /// <summary>
        /// Selects a stat from the list by its
        /// name and returns it.
        /// </summary>
        /// <param name="statName">The stat's name.</param>
        /// <returns>Stat</returns>
        public Stat GetStatByName(string statName)
        {
            return Stats.Single(s => s.Name == statName);
        }

        protected virtual void _RegisterLivingEntityAttributes()
        {
            Attributes.AddRange(new[]
            {
                AttributeDefinitions.Strength,
                AttributeDefinitions.Dexterity,
                AttributeDefinitions.Constitution,
                AttributeDefinitions.Intelligence,
                AttributeDefinitions.Wisdom,
                AttributeDefinitions.Charisma
            });
        }

        protected virtual void _RegisterLivingEntitySkills()
        {
            Attribute 
                STR = GetAttributeByName(AttributeNames.Strength),
                DEX = GetAttributeByName(AttributeNames.Dexterity),
                INT = GetAttributeByName(AttributeNames.Intelligence),
                WIS = GetAttributeByName(AttributeNames.Wisdom),
                CHA = GetAttributeByName(AttributeNames.Charisma);

            Skills.AddRange(new[]
            {
                SkillDefinitions.Athletics(STR),
                SkillDefinitions.Acrobatics(DEX),
                SkillDefinitions.SleightOfHand(DEX),
                SkillDefinitions.Stealth(DEX),
                SkillDefinitions.Arcana(INT),
                SkillDefinitions.History(INT),
                SkillDefinitions.Investigation(INT),
                SkillDefinitions.Nature(INT),
                SkillDefinitions.Religion(INT),
                SkillDefinitions.AnimalHandling(WIS),
                SkillDefinitions.Insight(WIS),
                SkillDefinitions.Medicine(WIS),
                SkillDefinitions.Perception(WIS),
                SkillDefinitions.Survival(WIS),
                SkillDefinitions.Deception(CHA),
                SkillDefinitions.Intimidation(CHA),
                SkillDefinitions.Performance(CHA),
                SkillDefinitions.Persuasion(CHA)
            });
        }

        protected virtual void _RegisterLivingEntityStats()
        {
            Stats.AddRange(new[]
            {
                StatDefinitions.HitPoints(GetAttributeByName(AttributeNames.Constitution)),
                StatDefinitions.Height(Height)
            });
            Stats.AddRange(new[]
            {
                StatDefinitions.CarryingCapacity(GetAttributeByName(AttributeNames.Strength), GetStatByName(StatNames.Size))
            });
            Stats.AddRange(new[]
            {
                StatDefinitions.ObjectHandlingCapacity(GetStatByName(StatNames.CarryingCapacity))
            });
        }

        protected virtual void _ApplyRacialTraits()
        {
            foreach (var attribute in Race.Attributes)
            {
                var raceTrait = new Modifier(attribute.Name + "RaceTrait");
                raceTrait.Value = Convert.ToInt32(Race.Attributes.ByName(attribute.Name).Value);
                Attributes.ByName(attribute.Name).Modifiers.Add(raceTrait);
            }

            foreach (var skill in Race.Skills)
            {
                var raceTrait = new Modifier(skill.Name + "RaceTrait");
                raceTrait.Value = Convert.ToInt32(Race.Skills.ByName(skill.Name).Value);
                Skills.ByName(skill.Name).Modifiers.Add(raceTrait);
            }

            foreach (var stat in Race.Stats)
            {
                var raceTrait = new Modifier(stat.Name + "RaceTrait");
                raceTrait.Value = Convert.ToInt32(Race.Stats.ByName(stat.Name).Modifiers[1]);
                Stats.ByName(stat.Name).Modifiers.Add(raceTrait);
            }
        }

        public LivingEntity(EntityRace race) : base()
        {
            IsAlive = true;
            Stats = new List<Stat>();
            Race = race;

            _RegisterLivingEntityAttributes();
            _RegisterLivingEntitySkills();
            _RegisterLivingEntityStats();

            _ApplyRacialTraits();
        }
    }
}
