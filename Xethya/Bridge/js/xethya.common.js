(function (globals) {
    "use strict";

    /** @namespace Xethya.Common */
    
    /**
     * @static
     * @abstract
     * @public
     * @class Xethya.Common.Guid
     */
    Bridge.define('Xethya.Common.Guid', {
        statics: {
            /**
             * @static
             * @private
             * @this Xethya.Common.Guid
             * @memberof Xethya.Common.Guid
             * @return  {string}
             */
            s4: function () {
                var mt = new Xethya.Common.Randomness.MersenneTwister();
                try {
                    return Bridge.String.alignString(Math.floor((1 + mt.generateRandom() * 65536)).toString(16).substr(1), 4, 48);
                }
                finally {
                    if (Bridge.hasValue(mt)) {
                        mt.dispose();
                    }
                }
            },
            /**
             * Generates a GUID.
             *
             * @static
             * @public
             * @this Xethya.Common.Guid
             * @memberof Xethya.Common.Guid
             * @return  {string}
             * @see {@link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript}
             */
            generate: function () {
                return Bridge.String.format("{0}{1}-{2}-{3}-{4}-{5}{6}{7}", Bridge.get(Xethya.Common.Guid).s4(), Bridge.get(Xethya.Common.Guid).s4(), Bridge.get(Xethya.Common.Guid).s4(), Bridge.get(Xethya.Common.Guid).s4(), Bridge.get(Xethya.Common.Guid).s4(), Bridge.get(Xethya.Common.Guid).s4(), Bridge.get(Xethya.Common.Guid).s4(), Bridge.get(Xethya.Common.Guid).s4());
            }
        }
    });
    
    /**
     * Represents a range of numbers, described through boundaries.
     Used for dice rolling.
     *
     * @public
     * @class Xethya.Common.ValueInterval
     */
    Bridge.define('Xethya.Common.ValueInterval', {
        config: {
            properties: {
                /**
                 * Represents the maximum number in this range.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Common.ValueInterval
                 * @memberof Xethya.Common.ValueInterval
                 * @function getUpperBound
                 * @return  {number}
                 */
                /**
                 * Represents the maximum number in this range.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Common.ValueInterval
                 * @memberof Xethya.Common.ValueInterval
                 * @function setUpperBound
                 * @param   {number}    value
                 * @return  {void}
                 */
                UpperBound: 0,
                /**
                 * Represents the minimum number in this range.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Common.ValueInterval
                 * @memberof Xethya.Common.ValueInterval
                 * @function getLowerBound
                 * @return  {number}
                 */
                /**
                 * Represents the minimum number in this range.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Common.ValueInterval
                 * @memberof Xethya.Common.ValueInterval
                 * @function setLowerBound
                 * @param   {number}    value
                 * @return  {void}
                 */
                LowerBound: 0
            }
        },
        /**
         * Represents a range of numbers.
         *
         * @instance
         * @public
         * @this Xethya.Common.ValueInterval
         * @memberof Xethya.Common.ValueInterval
         * @param   {number}    lowerBound    Minimum range value.
         * @param   {number}    upperBound    Maximum range value.
         * @return  {void}
         */
        constructor: function (lowerBound, upperBound) {
            this.setUpperBound(upperBound);
            this.setLowerBound(lowerBound);
        },
        /**
         * Checks if a value is in the defined range.
         *
         * @instance
         * @public
         * @this Xethya.Common.ValueInterval
         * @memberof Xethya.Common.ValueInterval
         * @param   {number}     value    Value to compare.
         * @return  {boolean}             True if in range; otherwise, false.
         */
        valueInRange$1: function (value) {
            return this.getLowerBound() <= value && value <= this.getUpperBound();
        },
        /**
         * Checks if a value is in the defined range.
         *
         * @instance
         * @public
         * @this Xethya.Common.ValueInterval
         * @memberof Xethya.Common.ValueInterval
         * @param   {number}     value    Value to compare.
         * @return  {boolean}             True if in range; otherwise, false.
         */
        valueInRange: function (value) {
            return Bridge.Decimal(this.getLowerBound()).lte(value) && value.lte(Bridge.Decimal(this.getUpperBound()));
        },
        /**
         * @instance
         * @public
         * @override
         * @this Xethya.Common.ValueInterval
         * @memberof Xethya.Common.ValueInterval
         * @return  {string}
         */
        toString: function () {
            return this.getLowerBound().toString() + "-" + this.getUpperBound().toString();
        }
    });
    
    
    
    Bridge.init();
})(this);
