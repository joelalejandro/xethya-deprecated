using Bridge;
using Bridge.Html5;
using System;
using Xethya.Common.Randomness;

namespace Xethya.Common
{
    public static class Guid
    {
        private static string S4()
        {
            using (var mt = new MersenneTwister())
            {
                return Math.Floor((1 + mt.GenerateRandom() * 0x10000)).ToString(16).Substring(1);
            }
        }

        /// <summary>
        /// Generates a GUID.
        /// </summary>
        /// <seealso cref="http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript"/>
        /// <returns></returns>
        public static string Generate()
        {
            return String.Format("{0}{1}-{2}-{3}-{4}-{5}{6}{7}",
                S4(), S4(), S4(), S4(), S4(), S4(), S4(), S4());
        }
    }
}
