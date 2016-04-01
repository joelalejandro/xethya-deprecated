using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.Entities;

namespace Xethya.Common.Interfaces
{
    public interface IWithAttributes
    {
        List<Attribute> Attributes { get; set; }
        Attribute GetAttributeByName(string attributeName);
    }
}
