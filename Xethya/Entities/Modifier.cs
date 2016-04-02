using Bridge;
using Bridge.Html5;
using Xethya.Common;
using Xethya.Common.Interfaces;

namespace Xethya.Entities
{
    /// <summary>
    /// A modifier alters the raw value of an attribute or skill.
    /// It can enhance or undermine the effect produced by either
    /// feature of the entity.
    /// </summary>
    public class Modifier
    {
        /// <summary>
        /// A unique identifier for the modifier. It can be
        /// an internal game reference, such as "strengthRaceBonus"
        /// or a GUID, such as "00000123F-213A-1242-54CA-12347ACB21AA".
        /// </summary>
        public string ID { get; private set; }

        /// <summary>
        /// The value which is used to affect the associated skill
        /// or attribute.
        /// </summary>
        public int Value { get; set; }

        /// <summary>
        /// A string identifier representing the reason why this
        /// modifier is in effect.
        /// </summary>
        public string Source { get; set; }

        /// <summary>
        /// Whether is modifier is in effect or not. Defaults to true.
        /// </summary>
        public bool Active { get; set; }

        /// <summary>
        /// Generates an active modifier with a GUID as identifier.
        /// </summary>
        public Modifier()
        {
            ID = Guid.Generate();
            Active = true;
        }

        /// <summary>
        /// Generates an active modifier with a given identifier.
        /// </summary>
        /// <param name="id">The new modifier's identifier.</param>
        public Modifier(string id)
        {
            ID = id;
            Active = false;
        }

        /// <summary>
        /// Activates the modifier.
        /// </summary>
        public void Activate()
        {
            Active = true;
        }

        /// <summary>
        /// Deactivates the modifier. This can be used for suspending
        /// the effect of this modifier for a period of time, from an
        /// external source.
        /// </summary>
        public void Deactivate()
        {
            Active = false;
        }
    }
}
