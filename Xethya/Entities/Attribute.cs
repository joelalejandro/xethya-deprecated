using System;
using Bridge;
using Bridge.Html5;
using Xethya.Common;
using Xethya.Common.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Xethya.Entities
{
    public class Attribute : ValueInterval, INameable, IWithModifiers
    {
        public string ID { get; private set; }

        public string Name { get; set; }

        public List<Modifier> Modifiers { get; set; }
        public int ModifierSum
        {
            get
            {
                return Modifiers.Sum(m => m.Value);
            }
        }

        protected decimal _Value;
        public decimal Value {
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

        public decimal ComputedValue
        {
            get
            {
                return Value + ModifierSum;
            }
        }

        public Attribute(string name) : base(0, 100)
        {
            ID = Guid.Generate();
            Name = name;
            Modifiers = new List<Modifier>();
        }

        public Attribute(string name, ValueInterval valueRange) : base(valueRange.LowerBound, valueRange.UpperBound)
        {
            ID = Guid.Generate();
            Name = name;
            Modifiers = new List<Modifier>();
        }

        protected void _RefreshBaseModifier()
        {
            var baseModifier = new Modifier();
            baseModifier.Source = null;
            baseModifier.Value = Convert.ToInt32(Math.Floor(Value / 15));
            if (Modifiers.Count == 0)
            {
                Modifiers.Add(baseModifier);
            }
            else
            {
                Modifiers[0] = baseModifier;
            }
        }
    }
}
