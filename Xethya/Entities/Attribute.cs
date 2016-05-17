using System;
using Bridge;
using Bridge.Html5;
using Xethya.Common;
using Xethya.Common.Interfaces;
using System.Collections.Generic;
using System.Linq;
using Xethya.DiceRolling;

namespace Xethya.Entities
{
    /// <summary>
    /// An attribute represents an aspect of an entity, such as its strength,
    /// power, presence, and so forth. It has a value range (minimum and maximum),
    /// hence it derives from the ValueInterval class. It also implements the
    /// INameable and IWithModifiers interfaces; thus, an attribute can be named
    /// and altered via modifiers.
    /// </summary>
    public class Attribute : ValueInterval, INameable, IWithModifiers
    {
        /// <summary>
        /// Returns the attribute's unique ID (unless overriden in the 
        /// constructor, this is a GUID value).
        /// </summary>
        public string ID { get; private set; }

        /// <summary>
        /// References the attribute's name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Contains a list of all of the attribute's modifiers. A modifier
        /// registered here can alter the value of the attribute (whether it
        /// boosts or penalizes such value).
        /// </summary>
        public List<Modifier> Modifiers { get; set; }

        /// <summary>
        /// Returns the sum of all registered modifiers. An attribute (unless
        /// overriden) has always at least a base modifier.
        /// </summary>
        public decimal ModifierSum
        {
            get
            {
                return Modifiers.Sum(m => m.Value);
            }
        }

        /// <summary>
        /// Returns the attribute's base modifier.
        /// </summary>
        public decimal BaseModifier
        {
            get
            {
                return Modifiers.First().Value;
            }
        }

        /// <summary>
        /// Contains the attribute's base value, with no modifiers applied.
        /// </summary>
        protected decimal _Value;

        /// <summary>
        /// References the attribute's base value, without modifiers. When setting
        /// the value, it'll check if the value is in the attribute's defined range
        /// and recalculate the base modifier as well. If the set value is out of
        /// range, an exception will be thrown.
        /// </summary>
        public virtual decimal Value {
            get { return _Value; }
            set
            {
                if (ValueInRange(value))
                {
                    _Value = value;
                    _RefreshBaseModifier();
                }
                else
                {
                    throw new ArgumentOutOfRangeException("Value", "Attribute " + Name + " has a value out of range " + base.ToString());
                }
            }
        }

        /// <summary>
        /// Returns the attribute's computed value (that is, its core value and
        /// the sum of all registered modifiers).
        /// </summary>
        public decimal ComputedValue
        {
            get
            {
                return Value + ModifierSum;
            }
        }

        /// <summary>
        /// Instantiates a new attribute. By default, the allowed values for it
        /// are all non-negative integers up to the 32-bit limit.
        /// </summary>
        /// <param name="name">The new attribute's name.</param>
        public Attribute(string name) : base(0, Int32.MaxValue)
        {
            ID = Guid.NewGuid().ToString();
            Name = name;
            Modifiers = new List<Modifier>();
        }

        /// <summary>
        /// Instantiates a new attribute, with a given value range.
        /// </summary>
        /// <param name="name">The new attribute's name.</param>
        /// <param name="valueRange">An instane of ValueInterval, containing the lower and upper limits of the value range.</param>
        public Attribute(string name, ValueInterval valueRange) : base(valueRange.LowerBound, valueRange.UpperBound)
        {
            ID = Guid.NewGuid().ToString();
            Name = name;
            Modifiers = new List<Modifier>();
        }

        /// <summary>
        /// When the value of the attribute is changed, this method recalculates the
        /// base modifier. The base modifier is the first modifier registered in the
        /// list (Modifiers[0]), and (unless overriden), the method calculates its
        /// value as the 15% of the attribute's value.
        /// </summary>
        protected virtual void _RefreshBaseModifier()
        {
            var baseModifier = new Modifier("baseModifier");
            baseModifier.Source = null;
            baseModifier.Value = Convert.ToInt32(Value * 0.15M);
            if (Modifiers.Count == 0)
            {
                Modifiers.Add(baseModifier);
            }
            else
            {
                Modifiers[0] = baseModifier;
            }
        }

        public override string ToString()
        {
            var sign = ModifierSum >= 0 ? "+" : "-";
            return Value.ToString() + " (" + sign + ModifierSum.ToString() + ")";
        }
    }

    public static class AttributeExtensions
    {
        public static Attribute ByName(this List<Attribute> obj, string name)
        {
            return obj.Single(a => a.Name == name);
        }

        public static void RollAllValues(this List<Attribute> obj)
        {
            foreach (var attribute in obj)
            {
                attribute.Value = new Dice(attribute.UpperBound.As<int>()).Roll();
            }
        }
    }
}
