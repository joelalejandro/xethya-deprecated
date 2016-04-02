(function (globals) {
    "use strict";

    
    Bridge.define('Xethya.Common.Randomness.MersenneTwister', {
        inherits: [Bridge.IDisposable],
        statics: {
            /**
             * @static
             * @private
             * @memberof Xethya.Common.Randomness.MersenneTwister
             * @constant
             * @default 624
             * @type number
             */
            N: 624,
            /**
             * @static
             * @private
             * @memberof Xethya.Common.Randomness.MersenneTwister
             * @constant
             * @default 397
             * @type number
             */
            M: 397,
            /**
             * @static
             * @private
             * @memberof Xethya.Common.Randomness.MersenneTwister
             * @constant
             * @default 2567483615
             * @type number
             */
            MATRIX_A: 2567483615,
            /**
             * @static
             * @private
             * @memberof Xethya.Common.Randomness.MersenneTwister
             * @constant
             * @default 2147483648
             * @type number
             */
            UPPER_MASK: 2147483648,
            /**
             * @static
             * @private
             * @memberof Xethya.Common.Randomness.MersenneTwister
             * @constant
             * @default 2147483647
             * @type number
             */
            LOWER_MASK: 2147483647
        },
        config: {
            properties: {
                /**
                 * @instance
                 * @private
                 * @this Xethya.Common.Randomness.MersenneTwister
                 * @memberof Xethya.Common.Randomness.MersenneTwister
                 * @function getMT
                 * @return  {Array.<number>}
                 */
                /**
                 * @instance
                 * @private
                 * @this Xethya.Common.Randomness.MersenneTwister
                 * @memberof Xethya.Common.Randomness.MersenneTwister
                 * @function setMT
                 * @param   {Array.<number>}    value
                 * @return  {void}
                 */
                MT: null,
                /**
                 * @instance
                 * @private
                 * @this Xethya.Common.Randomness.MersenneTwister
                 * @memberof Xethya.Common.Randomness.MersenneTwister
                 * @function getMTI
                 * @return  {number}
                 */
                /**
                 * @instance
                 * @private
                 * @this Xethya.Common.Randomness.MersenneTwister
                 * @memberof Xethya.Common.Randomness.MersenneTwister
                 * @function setMTI
                 * @param   {number}    value
                 * @return  {void}
                 */
                MTI: 0
            }
        },
        /**
         * Initializes the Mersenne-Twister algorithm.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @param   {?number}    seed    Optionally, set a seed value.
         * @return  {void}
         */
        constructor: function (seed) {
            if (seed === void 0) { seed = null; }
            if (!Bridge.Nullable.hasValue(seed)) {
                seed = Bridge.Int.trunc(new Date().getTime());
            }
    
            this.setMT(Bridge.Array.init(Bridge.get(Xethya.Common.Randomness.MersenneTwister).N, 0));
            this.setMTI(625);
    
            this.initializeRandomGenerator(Bridge.Nullable.getValue(seed));
        },
        /**
         * Loads the initialization vector required for the
         algorithm, according to a given seed.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @param   {number}    seed    A seed can be any non-negative integer value.
         * @return  {void}
         */
        initializeRandomGenerator: function (seed) {
            this.getMT()[0] = seed >>> 0;
            for (this.setMTI(1); this.getMTI() < Bridge.get(Xethya.Common.Randomness.MersenneTwister).N; this.setMTI(this.getMTI()+1)) {
                seed = this.getMT()[this.getMTI() - 1] ^ (this.getMT()[this.getMTI() - 1] >>> 30);
                this.getMT()[this.getMTI()] = ((((seed & 4294901760) >>> 16) * 1812433253) << 16) + ((seed & 65535) * 1812433253) + this.getMTI();
                this.getMT()[this.getMTI()] = this.getMT()[this.getMTI()] >>> 0;
            }
        },
        /**
         * An alternative way to load the initialization vector for
         the algorithm.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @param   {Array.<number>}    initKey    A list of non-negative integer values.
         * @return  {void}
         */
        initializeByArray: function (initKey) {
            var i = 1, j = 0, k;
            var keyLength = Bridge.cast(initKey.length, Bridge.Int);
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
        /**
         * Returns a random non-negative integer value.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @return  {number}        The random value.
         */
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
        /**
         * Returns a non-negative random integer value, within
         the range of Int31.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @return  {number}        The random number.
         */
        generateRandomInteger31: function () {
            return this.generateRandomInteger() >>> 1;
        },
        /**
         * Returns a non-negative random real number between 0 and 1.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @return  {number}        The random number.
         */
        generateRandomReal: function () {
            return this.generateRandomInteger() * (2.3283064370807974E-10);
        },
        /**
         * Returns a non-negative random number between 0 and 1.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @return  {number}        The random number.
         */
        generateRandom: function () {
            return this.generateRandomInteger() * (2.3283064365386963E-10);
        },
        /**
         * Returns a non-negative random number between 0 and 1.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @return  {number}        The random number.
         */
        generateRandomReal3: function () {
            return (this.generateRandomInteger() + 0.5) * (2.3283064365386963E-10);
        },
        /**
         * Returns a non-negative random numbef with a resolution
         of 53 bits.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @return  {number}        The random number.
         */
        generateRandomReal53BitResolution: function () {
            var a = this.generateRandomInteger() >>> 5;
            var b = this.generateRandomInteger() >>> 6;
            return (a * 671084464.0 + b) * (1.1102230246251565E-16);
        },
        /**
         * Destroys the initialization vector of the algorithm.
         *
         * @instance
         * @public
         * @this Xethya.Common.Randomness.MersenneTwister
         * @memberof Xethya.Common.Randomness.MersenneTwister
         * @return  {void}
         */
        dispose: function () {
            this.setMT(null);
        }
    });
    
    
    
    Bridge.init();
})(this);
