using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;

namespace Xethya.Entities
{
    /// <summary>
    /// A container that keeps track of all non-volatile entities
    /// in the game.
    /// </summary>
    public static class EntityContainer
    {
        /// <summary>
        /// Contains all registered entities.
        /// </summary>
        private static Dictionary<string, Entity> _Container { get; set; }

        /// <summary>
        /// Initializes the container for the first time. This method
        /// is automatically called from the Entity base class constructor,
        /// and it should be called just from there. All other calls would
        /// be effectless.
        /// </summary>
        public static void InitializeIfNeeded()
        {
            if (_Container == null)
            {
                _Container = new Dictionary<string, Entity>();
            }
        }

        /// <summary>
        /// Adds an entity to the container.
        /// </summary>
        /// <param name="entity">The entity to register. It must be a non-volatile entity.</param>
        public static void Register(Entity entity)
        {
            if (entity.IsVolatile)
            {
                throw new ArgumentException("The entity must be non-volatile in order to be registered in the Container. Set IsVolatile to true in order to do so");
            }
            
            _Container.Add(entity.ID, entity);
        }

        /// <summary>
        /// Returns an entity looking it up in the Container by its GUID.
        /// </summary>
        /// <param name="guid">The entity's GUID.</param>
        /// <returns>The entity itself.</returns>
        public static Entity Lookup(string guid)
        {
            return _Container[guid];
        }

        public static Dictionary<string, Entity> __GetContainer()
        {
            if (Global.Get<bool>("__XETHYA_DEBUG__"))
            {
                return _Container;
            }
            else
            {
                return null;
            }
        }
    }
}
