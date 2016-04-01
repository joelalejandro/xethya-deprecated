using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.Common;
using Xethya.Common.Interfaces;
using System;
using System.Linq;

namespace Xethya.Entities
{
    /// <summary>
    /// An entity represents a element in the world. As such,
    /// it has an unique ID and a name. This is the base class
    /// for all definable entities; every entity must derive
    /// from this class.
    /// </summary>
    abstract public class Entity : INameable, IWithAttributes, IWithModifiers
    {
        /// <summary>
        /// Contains the entity's GUID. Can only be set
        /// at class instantiation.
        /// </summary>
        public string ID { get; private set; }

        /// <summary>
        /// Contains a descriptive name for the entity.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Determines if an entity is cached in the container or not.
        /// </summary>
        public bool IsVolatile { get; private set; }

        public List<Attribute> Attributes { get; set; }

        public List<Modifier> Modifiers { get; set; }

        public int ModifierSum
        {
            get
            {
                return Modifiers.Sum(m => m.Value);
            }
        }

        /// <summary>
        /// Instantiates the entity, assigning it a unique ID.
        /// </summary>
        public Entity()
        {
            ID = Guid.Generate();
            IsVolatile = false;
            Attributes = new List<Attribute>();
            Modifiers = new List<Modifier>();

            _RegisterInContainerIfNeeded();
        }

        /// <summary>
        /// Instantiates the entity with a given name.
        /// </summary>
        /// <param name="name">The entity's name.</param>
        public Entity(string name)
        {
            ID = Guid.Generate();
            Name = name;
            IsVolatile = false;
            Attributes = new List<Attribute>();
            Modifiers = new List<Modifier>();

            _RegisterInContainerIfNeeded();
        }

        /// <summary>
        /// If the entity is non-volatile, it'll be registered in the 
        /// container via this method.
        /// </summary>
        private void _RegisterInContainerIfNeeded()
        {
            if (IsVolatile) return;

            EntityContainer.InitializeIfNeeded();
            EntityContainer.Register(this);
        }

        public Attribute GetAttributeByName(string attributeName)
        {
            return Attributes.First(a => a.Name == attributeName);
        }
    }
}
