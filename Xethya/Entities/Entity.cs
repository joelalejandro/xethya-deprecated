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
    abstract public class Entity : INameable, IWithAttributes
    {
        /// <summary>
        /// Contains the entity's GUID. Can only be set
        /// at class instantiation.
        /// </summary>
        public Guid ID { get; private set; }

        /// <summary>
        /// Contains a descriptive name for the entity.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Determines if an entity is cached in the container or not.
        /// </summary>
        public bool IsVolatile { get; private set; }

        /// <summary>
        /// The entity's height, in centimeters.
        /// </summary>
        public virtual int Height { get; set; }

        /// <summary>
        /// The entity's weight, in kilograms.
        /// </summary>
        public int Weight { get; set; }

        /// <summary>
        /// Returns the list of attributes associated to this entity.
        /// </summary>
        public List<Attribute> Attributes { get; set; }

        /// <summary>
        /// Determines if the entity is alive or not.
        /// It defaults to false. Any derived of LivingEntity
        /// such set this property to True.
        /// </summary>
        public bool IsAlive { get; set; }

        /// <summary>
        /// Instantiates the entity, assigning it a unique ID.
        /// </summary>
        public Entity()
        {
            ID = Guid.NewGuid();
            IsVolatile = false;
            IsAlive = false;
            Attributes = new List<Attribute>();

            _RegisterInContainerIfNeeded();
        }

        /// <summary>
        /// Instantiates the entity with a given name.
        /// </summary>
        /// <param name="name">The entity's name.</param>
        public Entity(string name)
        {
            ID = Guid.NewGuid();
            Name = name;
            IsVolatile = false;
            IsAlive = false;
            Attributes = new List<Attribute>();

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

        /// <summary>
        /// Gets an entity's attribute.
        /// </summary>
        /// <param name="attributeName">The name of the attribute.</param>
        /// <returns>The requested attribute.</returns>
        public Attribute GetAttributeByName(string attributeName)
        {
            return Attributes.Single(a => a.Name == attributeName);
        }
    }
}
