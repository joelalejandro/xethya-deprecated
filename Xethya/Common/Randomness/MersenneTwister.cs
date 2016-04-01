using Bridge;
using Bridge.Html5;
using System;

namespace Xethya.Common.Randomness
{
    /// <summary>
    /// Implementation of the Mersenne-Twister algorithm for generation
    /// of random numbers.
    /// </summary>
    /// <<seealso cref="https://gist.github.com/banksean/300494"/>
    public class MersenneTwister : IDisposable
    {
        private const int N = 624;
        private const int M = 397;
        private const uint MATRIX_A = 0x9908b0df;
        private const uint UPPER_MASK = 0x80000000;
        private const uint LOWER_MASK = 0x7fffffff;

        private uint[] MT { get; set; }
        private uint MTI { get; set; }

        public MersenneTwister(uint? seed = null)
        {
            if (!seed.HasValue)
            {
                seed = (uint)new Date().GetTime();
            }

            MT = new uint[N];
            MTI = N + 1;

            InitializeRandomGenerator(seed.Value);
        }

        public void InitializeRandomGenerator(uint seed)
        {
            MT[0] = seed >> 0;
            for (MTI = 1; MTI < N; MTI++)
            {
                seed = MT[MTI - 1] ^ (MT[MTI - 1] >> 30);
                MT[MTI] = ((((seed & 0xffff0000) >> 16) * 1812433253) << 16)
                        + ((seed & 0x0000ffff) * 1812433253)
                        + MTI;
                MT[MTI] = MT[MTI] >> 0;
            }
        }

        public void InitializeByArray(uint[] initKey, uint keyLength)
        {
            uint i = 1, j = 0, k;
            InitializeRandomGenerator(19650218);
            k = N > keyLength ? N : keyLength;
            for (; k > 0; k--)
            {
                uint s = MT[i - 1] ^ (MT[i - 1] >> 30);
                MT[i] = (MT[i] ^ (((((s & 0xffff0000) >> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
                    + initKey[j] + j;
                MT[i] = MT[i] >> 0;
                i++;
                j++;
                if (i >= N)
                {
                    MT[0] = MT[N - 1];
                    i = 1;
                }
                if (j >= keyLength)
                {
                    j = 0;
                }
            }
            for (k = N - 1; k > 0; k--)
            {
                uint s = MT[i - 1] ^ (MT[i - 1] >> 30);
                MT[i] = (MT[i] ^ (((((s & 0xffff0000) >> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
                  - i;
                MT[i] = MT[i] >> 0;
                i++;
                if (i >= N)
                {
                    MT[0] = MT[N - 1];
                    i = 1;
                }
            }
            MT[0] = 0x80000000;
        }

        public uint GenerateRandomInteger()
        {
            uint y;
            uint[] mag01 = new uint[] { 0x0, MATRIX_A };

            if (MTI >= N)
            {
                uint kk;
                if (MTI == N+1)
                {
                    InitializeRandomGenerator(5489);
                }
                for (kk = 0; kk < N - M; kk++)
                {
                    y = (MT[kk] & UPPER_MASK) | (MT[kk + 1] & LOWER_MASK);
                    MT[kk] = MT[kk + M] ^ (y >> 1) ^ mag01[y & 0x1];
                }
                for (; kk < N - 1; kk++)
                {
                    y = (MT[kk] & UPPER_MASK) | (MT[kk + 1] & LOWER_MASK);
                    MT[kk] = MT[kk + (M - N)] ^ (y >> 1) ^ mag01[y & 0x1];
                }
                y = (MT[N - 1] & UPPER_MASK) | (MT[0] & LOWER_MASK);
                MT[N - 1] = MT[M - 1] ^ (y >> 1) ^ mag01[y & 0x1];

                MTI = 0;
            }

            y = MT[MTI++];

            y ^= (y >> 11);
            y ^= (y << 7) & 0x9d2c5680;
            y ^= (y << 15) & 0xefc60000;
            y ^= (y >> 18);

            return y >> 0;
        }

        public uint GenerateRandomInteger31()
        {
            return GenerateRandomInteger() >> 1;
        }

        public double GenerateRandomReal()
        {
            return GenerateRandomInteger() * (1.0 / 4294967295.0);
        }

        public double GenerateRandom()
        {
            return GenerateRandomInteger() * (1.0 / 4294967296.0);
        }

        public double GenerateRandomReal3()
        {
            return (GenerateRandomInteger() + 0.5) * (1.0 / 4294967296.0);
        }

        public double GenerateRandomReal53BitResolution()
        {
            double a = GenerateRandomInteger() >> 5;
            double b = GenerateRandomInteger() >> 6;
            return (a * 671084464.0 + b) * (1.0 / 9007199254740992.0);
        }

        public void Dispose()
        {
            MT = null;
        }
    }
}