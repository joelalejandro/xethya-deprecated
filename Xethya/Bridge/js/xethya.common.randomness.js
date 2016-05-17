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
                seed = Bridge.Int.clipu32(new Date().getTime());
            }
    
            this.setMT(Bridge.Array.init(Xethya.Common.Randomness.MersenneTwister.N, 0));
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
            for (this.setMTI(1); this.getMTI() < Xethya.Common.Randomness.MersenneTwister.N; this.setMTI((this.getMTI() + 1) >>> 0)) {
                seed = (this.getMT()[((this.getMTI() - 1) >>> 0)] ^ (this.getMT()[((this.getMTI() - 1) >>> 0)] >>> 30)) >>> 0;
                this.getMT()[this.getMTI()] = (((((((((((((seed & 4294901760) >>> 0)) >>> 16) * 1812433253) >>> 0)) << 16) >>> 0)) + ((((((seed & 65535) >>> 0)) * 1812433253) >>> 0))) >>> 0) + this.getMTI()) >>> 0;
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
            var keyLength = initKey.length >>> 0;
            this.initializeRandomGenerator(19650218);
            k = Xethya.Common.Randomness.MersenneTwister.N > keyLength ? Xethya.Common.Randomness.MersenneTwister.N : keyLength;
            for (; k > 0; k = (k - 1) >>> 0) {
                var s = (this.getMT()[((i - 1) >>> 0)] ^ (this.getMT()[((i - 1) >>> 0)] >>> 30)) >>> 0;
                this.getMT()[i] = ((((((this.getMT()[i] ^ (((((((((((((s & 4294901760) >>> 0)) >>> 16) * 1664525) >>> 0)) << 16) >>> 0)) + ((((((s & 65535) >>> 0)) * 1664525) >>> 0))) >>> 0))) >>> 0)) + initKey[j]) >>> 0) + j) >>> 0;
                this.getMT()[i] = this.getMT()[i] >>> 0;
                i = (i + 1) >>> 0;
                j = (j + 1) >>> 0;
                if (i >= Xethya.Common.Randomness.MersenneTwister.N) {
                    this.getMT()[0] = this.getMT()[623];
                    i = 1;
                }
                if (j >= keyLength) {
                    j = 0;
                }
            }
            for (k = 623; k > 0; k = (k - 1) >>> 0) {
                var s1 = (this.getMT()[((i - 1) >>> 0)] ^ (this.getMT()[((i - 1) >>> 0)] >>> 30)) >>> 0;
                this.getMT()[i] = ((((this.getMT()[i] ^ (((((((((((((s1 & 4294901760) >>> 0)) >>> 16) * 1566083941) >>> 0)) << 16) >>> 0)) + (((((s1 & 65535) >>> 0)) * 1566083941) >>> 0)) >>> 0))) >>> 0)) - i) >>> 0;
                this.getMT()[i] = this.getMT()[i] >>> 0;
                i = (i + 1) >>> 0;
                if (i >= Xethya.Common.Randomness.MersenneTwister.N) {
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
            var y;
            var mag01 = [0, Xethya.Common.Randomness.MersenneTwister.MATRIX_A];
    
            if (this.getMTI() >= Xethya.Common.Randomness.MersenneTwister.N) {
                var kk;
                if (this.getMTI() === 625) {
                    this.initializeRandomGenerator(5489);
                }
                for (kk = 0; kk < 227; kk = (kk + 1) >>> 0) {
                    y = ((((this.getMT()[kk] & Xethya.Common.Randomness.MersenneTwister.UPPER_MASK) >>> 0)) | (((this.getMT()[((kk + 1) >>> 0)] & Xethya.Common.Randomness.MersenneTwister.LOWER_MASK) >>> 0))) >>> 0;
                    this.getMT()[kk] = (((this.getMT()[((kk + Xethya.Common.Randomness.MersenneTwister.M) >>> 0)] ^ (y >>> 1)) >>> 0) ^ mag01[((y & 1) >>> 0)]) >>> 0;
                }
                for (; kk < 623; kk = (kk + 1) >>> 0) {
                    y = ((((this.getMT()[kk] & Xethya.Common.Randomness.MersenneTwister.UPPER_MASK) >>> 0)) | (((this.getMT()[((kk + 1) >>> 0)] & Xethya.Common.Randomness.MersenneTwister.LOWER_MASK) >>> 0))) >>> 0;
                    this.getMT()[kk] = (((this.getMT()[Bridge.Long(kk).add(Bridge.Long((-227)))] ^ (y >>> 1)) >>> 0) ^ mag01[((y & 1) >>> 0)]) >>> 0;
                }
                y = ((((this.getMT()[623] & Xethya.Common.Randomness.MersenneTwister.UPPER_MASK) >>> 0)) | (((this.getMT()[0] & Xethya.Common.Randomness.MersenneTwister.LOWER_MASK) >>> 0))) >>> 0;
                this.getMT()[623] = (((this.getMT()[396] ^ (y >>> 1)) >>> 0) ^ mag01[((y & 1) >>> 0)]) >>> 0;
    
                this.setMTI(0);
            }
    
            y = this.getMT()[Bridge.identity(this.getMTI(), (this.setMTI((this.getMTI() + 1) >>> 0), this.getMTI()))];
    
            y = (y ^ (y >>> 11)) >>> 0;
            y = (y ^ ((((((y << 7) >>> 0)) & 2636928640) >>> 0))) >>> 0;
            y = (y ^ ((((((y << 15) >>> 0)) & 4022730752) >>> 0))) >>> 0;
            y = (y ^ (y >>> 18)) >>> 0;
    
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
