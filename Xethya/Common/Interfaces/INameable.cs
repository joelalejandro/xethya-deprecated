using Bridge;
using Bridge.Html5;

namespace Xethya.Common.Interfaces
{
    /// <summary>
    /// This interface injects the "Name" property to any given object.
    /// </summary>
    public interface INameable
    {
        /// <summary>
        /// The object's name.
        /// </summary>
        string Name { get; set; }
    }
}
