using Bridge;
using Bridge.Html5;
using System.Collections.Generic;
using Xethya.Entities;

namespace Xethya.Common.Interfaces
{
    /// <summary>
    /// Apply this interface to any object requiring the
    /// usage of stats. 
    /// </summary>
    public interface IWithStats
    {
        /// <summary>
        /// Allows the implementing object to hold stats.
        /// </summary>
        List<Stat> Stats { get; set; }

        /// <summary>
        /// Selects a stat from the list by its
        /// name and returns it.
        /// </summary>
        /// <param name="statName">The stat's name.</param>
        /// <returns>Stat</returns>
        Stat GetStatByName(string statName);
    }
}
