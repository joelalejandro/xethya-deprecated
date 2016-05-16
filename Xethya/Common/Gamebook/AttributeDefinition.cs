using Bridge;
using Xethya.Entities;

namespace Xethya.Common.Gamebook
{
    public static class AttributeDefinitions
    {
        private static ValueInterval _DefaultValueRange
        {
            get
            {
                return new ValueInterval(1, 30);
            }
        }

        public static Attribute Strength
        {
            get
            {
                return new Attribute(AttributeNames.Strength, _DefaultValueRange);
            }
        }

        public static Attribute Dexterity
        {
            get
            {
                return new Attribute(AttributeNames.Dexterity, _DefaultValueRange);
            }
        }

        public static Attribute Constitution
        {
            get
            {
                return new Attribute(AttributeNames.Constitution, _DefaultValueRange);
            }
        }

        public static Attribute Intelligence
        {
            get
            {
                return new Attribute(AttributeNames.Intelligence, _DefaultValueRange);
            }
        }

        public static Attribute Wisdom
        {
            get
            {
                return new Attribute(AttributeNames.Wisdom, _DefaultValueRange);
            }
        }

        public static Attribute Charisma
        {
            get
            {
                return new Attribute(AttributeNames.Charisma, _DefaultValueRange);
            }
        }
    }
}
