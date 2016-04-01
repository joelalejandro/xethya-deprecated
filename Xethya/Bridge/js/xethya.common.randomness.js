(function (globals) {
    "use strict";

    
    Bridge.define('Xethya.Common.Randomness.MersenneTwister', {
        inherits: [Bridge.IDisposable],
        statics: {
            N: 624,
            M: 397,
            MATRIX_A: 2567483615,
            UPPER_MASK: 2147483648,
            LOWER_MASK: 2147483647
        },
        config: {
            properties: {
                MT: null,
                MTI: 0
            }
        },
        constructor: function (seed) {
            if (seed === void 0) { seed = null; }
            if (!Bridge.Nullable.hasValue(seed)) {
                seed = Bridge.Int.trunc(new Date().getTime());
            }
    
            this.setMT(Bridge.Array.init(Bridge.get(Xethya.Common.Randomness.MersenneTwister).N, 0));
            this.setMTI(625);
    
            this.initializeRandomGenerator(Bridge.Nullable.getValue(seed));
        },
        initializeRandomGenerator: function (seed) {
            this.getMT()[0] = seed >>> 0;
            for (this.setMTI(1); this.getMTI() < Bridge.get(Xethya.Common.Randomness.MersenneTwister).N; this.setMTI(this.getMTI()+1)) {
                seed = this.getMT()[this.getMTI() - 1] ^ (this.getMT()[this.getMTI() - 1] >>> 30);
                this.getMT()[this.getMTI()] = ((((seed & 4294901760) >>> 16) * 1812433253) << 16) + ((seed & 65535) * 1812433253) + this.getMTI();
                this.getMT()[this.getMTI()] = this.getMT()[this.getMTI()] >>> 0;
            }
        },
        initializeByArray: function (initKey, keyLength) {
            var i = 1, j = 0, k;
            this.initializeRandomGenerator(19650218);
            k = Bridge.get(Xethya.Common.Randomness.MersenneTwister).N > keyLength ? Bridge.get(Xethya.Common.Randomness.MersenneTwister).N : keyLength;
            for (; k > 0; k--) {
                var s = this.getMT()[i - 1] ^ (this.getMT()[i - 1] >>> 30);
                this.getMT()[i] = (this.getMT()[i] ^ (((((s & 4294901760) >>> 16) * 1664525) << 16) + ((s & 65535) * 1664525))) + initKey[j] + j;
                this.getMT()[i] = this.getMT()[i] >>> 0;
                i++;
                j++;
                if (i >= Bridge.get(Xethya.Common.Randomness.MersenneTwister).N) {
                    this.getMT()[0] = this.getMT()[623];
                    i = 1;
                }
                if (j >= keyLength) {
                    j = 0;
                }
            }
            for (k = 623; k > 0; k--) {
                var s1 = this.getMT()[i - 1] ^ (this.getMT()[i - 1] >>> 30);
                this.getMT()[i] = (this.getMT()[i] ^ (((((s1 & 4294901760) >>> 16) * 1566083941) << 16) + (s1 & 65535) * 1566083941)) - i;
                this.getMT()[i] = this.getMT()[i] >>> 0;
                i++;
                if (i >= Bridge.get(Xethya.Common.Randomness.MersenneTwister).N) {
                    this.getMT()[0] = this.getMT()[623];
                    i = 1;
                }
            }
            this.getMT()[0] = 2147483648;
        },
        generateRandomInteger: function () {
            var $t;
            var y;
            var mag01 = [0, Bridge.get(Xethya.Common.Randomness.MersenneTwister).MATRIX_A];
    
            if (this.getMTI() >= Bridge.get(Xethya.Common.Randomness.MersenneTwister).N) {
                var kk;
                if (this.getMTI() === 625) {
                    this.initializeRandomGenerator(5489);
                }
                for (kk = 0; kk < 227; kk++) {
                    y = (this.getMT()[kk] & Bridge.get(Xethya.Common.Randomness.MersenneTwister).UPPER_MASK) | (this.getMT()[kk + 1] & Bridge.get(Xethya.Common.Randomness.MersenneTwister).LOWER_MASK);
                    this.getMT()[kk] = this.getMT()[kk + Bridge.get(Xethya.Common.Randomness.MersenneTwister).M] ^ (y >>> 1) ^ mag01[y & 1];
                }
                for (; kk < 623; kk++) {
                    y = (this.getMT()[kk] & Bridge.get(Xethya.Common.Randomness.MersenneTwister).UPPER_MASK) | (this.getMT()[kk + 1] & Bridge.get(Xethya.Common.Randomness.MersenneTwister).LOWER_MASK);
                    this.getMT()[kk] = this.getMT()[kk + (-227)] ^ (y >>> 1) ^ mag01[y & 1];
                }
                y = (this.getMT()[623] & Bridge.get(Xethya.Common.Randomness.MersenneTwister).UPPER_MASK) | (this.getMT()[0] & Bridge.get(Xethya.Common.Randomness.MersenneTwister).LOWER_MASK);
                this.getMT()[623] = this.getMT()[396] ^ (y >>> 1) ^ mag01[y & 1];
    
                this.setMTI(0);
            }
    
            y = this.getMT()[($t = this.getMTI(), this.setMTI($t+1), $t)];
    
            y ^= (y >>> 11);
            y ^= (y << 7) & 2636928640;
            y ^= (y << 15) & 4022730752;
            y ^= (y >>> 18);
    
            return y >>> 0;
        },
        generateRandomInteger31: function () {
            return this.generateRandomInteger() >>> 1;
        },
        generateRandomReal: function () {
            return this.generateRandomInteger() * (2.3283064370807974E-10);
        },
        generateRandom: function () {
            return this.generateRandomInteger() * (2.3283064365386963E-10);
        },
        generateRandomReal3: function () {
            return (this.generateRandomInteger() + 0.5) * (2.3283064365386963E-10);
        },
        generateRandomReal53BitResolution: function () {
            var a = this.generateRandomInteger() >>> 5;
            var b = this.generateRandomInteger() >>> 6;
            return (a * 671084464.0 + b) * (1.1102230246251565E-16);
        },
        dispose: function () {
            this.setMT(null);
        }
    });
    
    
    
    Bridge.init();
})(this);
