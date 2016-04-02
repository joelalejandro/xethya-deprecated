using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.Entities;

namespace Xethya.Common.Interfaces
{
    /// <summary>
    /// Apply this interface to any object requiring the
    /// usage of attributes. 
    /// </summary>
    public interface IWithAttributes
    {
        /// <summary>
        /// Allows the implementing object to hold
        /// attributes.
        /// </summary>
        List<Attribute> Attributes { get; set; }

        /// <summary>
        /// Selects an attribute from the list by its
        /// name and returns it.
        /// </summary>
        /// <param name="attributeName">The attribute's name.</param>
        /// <returns>Attribute</returns>
        Attribute GetAttributeByName(string attributeName);
    }
}
