using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.Entities;
using System.Linq;

namespace Xethya.Common.Interfaces
{
    /// <summary>
    /// Apply this interface to any object that will hold
    /// modifiers.
    /// </summary>
    public interface IWithModifiers
    {
        /// <summary>
        /// Allows the implementing object to hold modifiers.
        /// </summary>
        List<Modifier> Modifiers { get; set; }

        /// <summary>
        /// Returns the sum of each modifier's value.
        /// </summary>
        decimal ModifierSum { get; }
    }
}
