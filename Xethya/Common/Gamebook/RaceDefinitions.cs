using Bridge;
using Bridge.Html5;
using Xethya.Entities;

namespace Xethya.Common.Gamebook
{
    public static class RaceDefinitions
    {
        public static EntityRace Dwarf
        {
            get
            {
                var race = new EntityRace(RaceNames.Dwarf);

                race.DefineAttributeBoost(AttributeNames.Constitution, 2);
                race.DefineAttributeBoost(AttributeNames.Speed, 25);

                race.LifeExpectancy = 350;
                race.DefaultAlignment = EntityAlignment.LawfulGood;
                race.HeightRange = "121,152".AsValueInterval();

                return race;
            }
        }

        public static EntityRace HillDwarf
        {
            get
            {
                var race = Dwarf;
                race.Name = RaceNames.HillDwarf;

                race.DefineAttributeBoost(AttributeNames.Wisdom, 1);
                race.DefineStatBoost(StatNames.HitPoints, 1);

                return race;
            }
        }

        public static EntityRace Elf
        {
            get
            {
                var race = new EntityRace(RaceNames.Elf);

                race.DefineAttributeBoost(AttributeNames.Dexterity, 2);
                race.DefineAttributeBoost(AttributeNames.Speed, 30);
                race.LifeExpectancy = 750;
                race.DefaultAlignment = EntityAlignment.ChaoticGood;

                return race;
            }
        }

        public static EntityRace DrowElf
        {
            get
            {
                var race = Elf;

                race.Name = RaceNames.DrowElf;
                race.DefaultAlignment = EntityAlignment.ChaoticEvil;

                return race;
            }
        }

        public static EntityRace HighElf
        {
            get
            {
                var race = Elf;
                race.Name = RaceNames.HighElf;

                race.DefineAttributeBoost(AttributeNames.Intelligence, 1);

                return race;
            }
        }

        public static EntityRace Halfling
        {
            get
            {
                var race = new EntityRace(RaceNames.Halfling);

                race.DefineAttributeBoost(AttributeNames.Dexterity, 2);
                race.DefineAttributeBoost(AttributeNames.Speed, 25);
                race.LifeExpectancy = 160;
                race.DefaultAlignment = EntityAlignment.LawfulGood;

                return race;
            }
        }

        public static EntityRace LightfootHalfling
        {
            get
            {
                var race = Halfling;

                race.DefineAttributeBoost(AttributeNames.Charisma, 1);

                return race;
            }
        }

        public static EntityRace Human
        {
            get
            {
                var race = new EntityRace(RaceNames.Human);

                race.DefineAttributeBoost(AttributeNames.Strength, 1);
                race.DefineAttributeBoost(AttributeNames.Dexterity, 1);
                race.DefineAttributeBoost(AttributeNames.Constitution, 1);
                race.DefineAttributeBoost(AttributeNames.Intelligence, 1);
                race.DefineAttributeBoost(AttributeNames.Wisdom, 1);
                race.DefineAttributeBoost(AttributeNames.Charisma, 1);
                race.DefineAttributeBoost(AttributeNames.Speed, 30);
                race.LifeExpectancy = 95;
                race.DefaultAlignment = EntityAlignment.Neutral;

                return race;
            }
        }

        public static EntityRace Dragonborn
        {
            get
            {
                var race = new EntityRace(RaceNames.Dragonborn);

                race.DefineAttributeBoost(AttributeNames.Strength, 2);
                race.DefineAttributeBoost(AttributeNames.Charisma, 1);
                race.DefineAttributeBoost(AttributeNames.Speed, 30);
                race.LifeExpectancy = 80;

                return race;
            }
        }

        public static EntityRace Gnome
        {
            get
            {
                var race = new EntityRace(RaceNames.Gnome);

                race.DefineAttributeBoost(AttributeNames.Intelligence, 2);
                race.DefineAttributeBoost(AttributeNames.Speed, 25);
                race.LifeExpectancy = 500;

                return race;
            }
        }

        public static EntityRace RockGnome
        {
            get
            {
                var race = Gnome;

                race.DefineAttributeBoost(AttributeNames.Constitution, 1);

                return race;
            }
        }

        public static EntityRace HalfElf
        {
            get
            {
                var race = new EntityRace(RaceNames.HalfElf);

                race.DefineAttributeBoost(AttributeNames.Charisma, 2);
                race.DefineAttributeBoost(AttributeNames.Speed, 30);
                race.LifeExpectancy = 180;

                return race;
            }
        }

        public static EntityRace HalfOrc
        {
            get
            {
                var race = new EntityRace(RaceNames.HalfOrc);

                race.DefineAttributeBoost(AttributeNames.Strength, 2);
                race.DefineAttributeBoost(AttributeNames.Constitution, 1);
                race.DefineAttributeBoost(AttributeNames.Speed, 30);
                race.LifeExpectancy = 75;

                return race;
            }
        }

        public static EntityRace Tiefling
        {
            get
            {
                var race = new EntityRace(RaceNames.Tiefling);

                race.DefineAttributeBoost(AttributeNames.Intelligence, 1);
                race.DefineAttributeBoost(AttributeNames.Charisma, 2);
                race.DefineAttributeBoost(AttributeNames.Speed, 30);
                race.LifeExpectancy = 115;

                return race;
            }
        }
    }
}
