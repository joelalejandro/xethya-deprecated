using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.Entities;
using System.Linq;

namespace Xethya.Common.Interfaces
{
    public interface IWithModifiers
    {
        List<Modifier> Modifiers { get; set; }
        int ModifierSum { get; }
    }
}
