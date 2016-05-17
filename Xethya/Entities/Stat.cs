using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xethya.Common.Interfaces;

namespace Xethya.Entities
{
    /// <summary>
    /// A stat is a calculation derived from the value of one or
    /// multiple attributes. It works just like a skill, but it
    /// has not an independent Use() method. It is always part of
    /// an ability check.
    /// </summary>
    public class Stat : Attribute, IWithAttributes, IModifierSource, IWithStats
    {
        /// <summary>
        /// Allows the implementing object to hold stats.
        /// </summary>
        public List<Stat> Stats { get; set; }

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
   
        /// <summary>
        /// Contains a reference to the function that computes the value
        /// of the stat, based on attributes and other stats.
        /// </summary>
        public Func<List<Attribute>, List<Stat>, decimal> CalculationCallback { get; set; }

        /// <summary>
        /// Returns the result of the calculation callback.
        /// </summary>
        public override decimal Value
        {
            get
            {
                if (CalculationCallback == null)
                {
                    throw new InvalidOperationException("A calculation callback must be defined for the " + Name + " stat.");
                }
                return CalculationCallback.Call(null, Attributes, Stats).As<decimal>();
            }
        }

        /// <summary>
        /// Nullifies the base modifier code inherited from Attribute,
        /// since a Stat has no base modifier.
        /// </summary>
        protected override void _RefreshBaseModifier()
        {
            
        }

        /// <summary>
        /// Contains the required attributes for the stat.
        /// </summary>
        public List<Attribute> Attributes { get; set; }

        /// <summary>
        /// Gets an associated attribute by its name.
        /// </summary>
        /// <param name="attributeName">The attribute's name.</param>
        /// <returns>The requested attribute.</returns>
        public Attribute GetAttributeByName(string attributeName)
        {
            return Attributes.First(a => a.Name == attributeName);
        }

        /// <summary>
        /// Instantiates a new stat, with a given name.
        /// </summary>
        /// <param name="name">The new stat's name.</param>
        public Stat(string name) : base(name)
        {
            Stats = new List<Stat>();
            Attributes = new List<Attribute>();
        }

        /// <summary>
        /// Instantiates a new stat, with a given name and a calculation callback.
        /// </summary>
        /// <param name="name">The new stat's name.</param>
        /// <param name="calculationCallback">The function callback to be used when getting the value of the stat.</param>
        public Stat(string name, Func<List<Attribute>, List<Stat>, decimal> calculationCallback) : base(name)
        {
            Stats = new List<Stat>();
            Attributes = new List<Attribute>();
            CalculationCallback = calculationCallback;
        }
    }

    public static class StatExtensions
    {
        public static Stat ByName(this List<Stat> obj, string name)
        {
            return obj.Single(s => s.Name == name);
        }
    }
}
