(function (globals) {
    "use strict";

    /** @namespace Xethya.DiceRolling */
    
    /**
     * A dice throw represents the roll of one or more dices of
     a fixed number of faces. It returns a DiceThrowResult object
     containing the rolls of each dice. This class can be derived
     for implementing more advanced roll algorithms.
     *
     * @public
     * @class Xethya.DiceRolling.DiceThrow
     */
    Bridge.define('Xethya.DiceRolling.DiceThrow', {
        config: {
            properties: {
                /**
                 * Contains a list of all the dices for this throw.
                 *
                 * @instance
                 * @protected
                 * @this Xethya.DiceRolling.DiceThrow
                 * @memberof Xethya.DiceRolling.DiceThrow
                 * @function get_Dice
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Contains a list of all the dices for this throw.
                 *
                 * @instance
                 * @protected
                 * @this Xethya.DiceRolling.DiceThrow
                 * @memberof Xethya.DiceRolling.DiceThrow
                 * @function set_Dice
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                _Dice: null
            }
        },
        /**
         * Instantiates a dice throw.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.DiceThrow
         * @memberof Xethya.DiceRolling.DiceThrow
         * @param   {number}    numberOfDices    How many dices will participate in the roll.
         * @param   {number}    maxNumber        The number of faces in the dices.
         * @return  {void}
         */
        constructor: function (numberOfDices, maxNumber) {
            this.set_Dice(new Bridge.List$1(Xethya.DiceRolling.Dice)());
            for (var d = 0; d < numberOfDices; d++) {
                this.get_Dice().add(new Xethya.DiceRolling.Dice(maxNumber));
            }
        },
        /**
         * Executes the throw, saving the result of each roll
         in the Rolls list. This method can be overriden or
         extended in order to create more complex algorithms.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.DiceThrow
         * @memberof Xethya.DiceRolling.DiceThrow
         * @return  {Xethya.DiceRolling.DiceThrowResult}        An object containing information about the throw.
         */
        roll: function () {
            var dtr = new Xethya.DiceRolling.DiceThrowResult();
            dtr.setRolls(Bridge.Linq.Enumerable.from(this.get_Dice()).select($_.Xethya.DiceRolling.DiceThrow.f1).toList(Bridge.Int));
            return dtr;
        }
    });
    
    var $_ = {};
    
    Bridge.ns("Xethya.DiceRolling.DiceThrow", $_)
    
    Bridge.apply($_.Xethya.DiceRolling.DiceThrow, {
        f1: function (d) {
            return d.roll();
        }
    });
    
    /**
     * Contains information about the result of a dice throw.
     *
     * @public
     * @class Xethya.DiceRolling.DiceThrowResult
     */
    Bridge.define('Xethya.DiceRolling.DiceThrowResult', {
        config: {
            properties: {
                /**
                 * Contains all of the rolled number.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.DiceThrowResult
                 * @memberof Xethya.DiceRolling.DiceThrowResult
                 * @function getRolls
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Contains all of the rolled number.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.DiceThrowResult
                 * @memberof Xethya.DiceRolling.DiceThrowResult
                 * @function setRolls
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Rolls: null
            }
        },
        /**
         * Instantiates the data structure.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.DiceThrowResult
         * @memberof Xethya.DiceRolling.DiceThrowResult
         * @return  {void}
         */
        constructor: function () {
            this.setRolls(new Bridge.List$1(Bridge.Int)());
        },
        /**
         * Returns the sum of all rolled numbers.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.DiceThrowResult
         * @memberof Xethya.DiceRolling.DiceThrowResult
         * @function getRollSum
         * @return  {number}
         */
        /**
         * Returns the sum of all rolled numbers.
         *
         * @instance
         * @function setRollSum
         */
        getRollSum: function () {
            return Bridge.Linq.Enumerable.from(this.getRolls()).sum();
        }
    });
    
    /**
     * Defines the configuration for a chance throw.
     *
     * @public
     * @class Xethya.DiceRolling.ChanceThrowSettings
     */
    Bridge.define('Xethya.DiceRolling.ChanceThrowSettings', {
        config: {
            properties: {
                /**
                 * The numeric range in which a roll will be considered Failure.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowSettings
                 * @memberof Xethya.DiceRolling.ChanceThrowSettings
                 * @function getFailureRange
                 * @return  {Xethya.Common.ValueInterval}
                 */
                /**
                 * The numeric range in which a roll will be considered Failure.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowSettings
                 * @memberof Xethya.DiceRolling.ChanceThrowSettings
                 * @function setFailureRange
                 * @param   {Xethya.Common.ValueInterval}    value
                 * @return  {void}
                 */
                FailureRange: null,
                /**
                 * The numeric range in which a roll will be considered Success.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowSettings
                 * @memberof Xethya.DiceRolling.ChanceThrowSettings
                 * @function getSuccessRange
                 * @return  {Xethya.Common.ValueInterval}
                 */
                /**
                 * The numeric range in which a roll will be considered Success.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowSettings
                 * @memberof Xethya.DiceRolling.ChanceThrowSettings
                 * @function setSuccessRange
                 * @param   {Xethya.Common.ValueInterval}    value
                 * @return  {void}
                 */
                SuccessRange: null,
                /**
                 * The numeric range in which a roll will be considered CriticalSuccess.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowSettings
                 * @memberof Xethya.DiceRolling.ChanceThrowSettings
                 * @function getCriticalSuccessRange
                 * @return  {Xethya.Common.ValueInterval}
                 */
                /**
                 * The numeric range in which a roll will be considered CriticalSuccess.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowSettings
                 * @memberof Xethya.DiceRolling.ChanceThrowSettings
                 * @function setCriticalSuccessRange
                 * @param   {Xethya.Common.ValueInterval}    value
                 * @return  {void}
                 */
                CriticalSuccessRange: null
            }
        },
        /**
         * Instantiates the default configuration for a chance throw.
         Thus, a roll of 1 thru 20 will be of Failure; a roll of 21 thru 90
         will be of Success; and a roll of 91 thru 100 will be of Critical
         Success.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.ChanceThrowSettings
         * @memberof Xethya.DiceRolling.ChanceThrowSettings
         * @return  {void}
         */
        constructor: function () {
            this.setFailureRange(new Xethya.Common.ValueInterval(1, 20));
            this.setSuccessRange(new Xethya.Common.ValueInterval(21, 90));
            this.setCriticalSuccessRange(new Xethya.Common.ValueInterval(91, 100));
        },
        /**
         * Instantiates a configuration object for a chance throw.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.ChanceThrowSettings
         * @memberof Xethya.DiceRolling.ChanceThrowSettings
         * @param   {Xethya.Common.ValueInterval}    failureRange            The range of values for a roll to be a Failure.
         * @param   {Xethya.Common.ValueInterval}    successRange            The range of values for a roll to be a Success.
         * @param   {Xethya.Common.ValueInterval}    criticalSuccessRange    The range of values for a roll to be a Critical Success.
         * @return  {void}
         */
        constructor$2: function (failureRange, successRange, criticalSuccessRange) {
            this.setFailureRange(failureRange);
            this.setSuccessRange(successRange);
            this.setCriticalSuccessRange(criticalSuccessRange);
        },
        /**
         * Instantiates a configuration object for a chance throw.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.ChanceThrowSettings
         * @memberof Xethya.DiceRolling.ChanceThrowSettings
         * @param   {number}    failureLowerBound            The minimum value for a roll to be a Failure.
         * @param   {number}    failureUpperBound            The maximum value for a roll to be a Failure.
         * @param   {number}    successLowerBound            The minimum value for a roll to be a Success.
         * @param   {number}    successUpperBound            The maximum value for a roll to be a Success.
         * @param   {number}    criticalSuccessLowerBound    The minimum value for a roll to be a Critical Success.
         * @param   {number}    criticalSuccessUpperBound    The maximum value for a roll to be a Critical Success.
         * @return  {void}
         */
        constructor$1: function (failureLowerBound, failureUpperBound, successLowerBound, successUpperBound, criticalSuccessLowerBound, criticalSuccessUpperBound) {
            this.setFailureRange(new Xethya.Common.ValueInterval(failureLowerBound, failureUpperBound));
            this.setSuccessRange(new Xethya.Common.ValueInterval(successLowerBound, successUpperBound));
            this.setCriticalSuccessRange(new Xethya.Common.ValueInterval(criticalSuccessLowerBound, criticalSuccessUpperBound));
        }
    });
    
    /**
     * Representa a dice, a way of getting a positive non-zero
     random integer.
     *
     * @public
     * @class Xethya.DiceRolling.Dice
     */
    Bridge.define('Xethya.DiceRolling.Dice', {
        /**
         * Stores the number of faces of the dice.
         *
         * @instance
         * @private
         * @memberof Xethya.DiceRolling.Dice
         * @type number
         */
        _Faces: 0,
        /**
         * Configures a dice.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.Dice
         * @memberof Xethya.DiceRolling.Dice
         * @param   {number}    faces    Number of faces of the dice. Must be at least 2.
         * @return  {void}
         */
        constructor: function (faces) {
            if (faces < 2) {
                throw new Bridge.Exception("A dice must have at least two faces.");
            }
            this._Faces = faces;
        },
        /**
         * Returns the number of faces of the dice.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.Dice
         * @memberof Xethya.DiceRolling.Dice
         * @function getFaces
         * @return  {number}
         */
        /**
         * Returns the number of faces of the dice.
         *
         * @instance
         * @function setFaces
         */
        getFaces: function () {
            return this._Faces;
        },
        /**
         * Rolls the dice.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.Dice
         * @memberof Xethya.DiceRolling.Dice
         * @return  {number}        The rolled number.
         */
        roll: function () {
            var mt = new Xethya.Common.Randomness.MersenneTwister();
            try {
                return Bridge.Int.trunc(Math.ceil(mt.generateRandom() * this.getFaces()));
            }
            finally {
                if (Bridge.hasValue(mt)) {
                    mt.dispose();
                }
            }
        }
    });
    
    /**
     * Defines qualifications for a chance throw.
     *
     * @public
     * @class Xethya.DiceRolling.DiceThrowType
     */
    Bridge.define('Xethya.DiceRolling.DiceThrowType', {
        statics: {
            failure: 0,
            normal: 1,
            critical: 2
        },
        $enum: true
    });
    
    /**
     * A chance throw is an extension of the DiceThrow class, designed to
     throw a single d100. The throw result, extended from DiceThrowResult,
     is categorised in a failed, successful or critically-successful roll.
     *
     * @public
     * @class Xethya.DiceRolling.ChanceThrow
     * @augments Xethya.DiceRolling.DiceThrow
     */
    Bridge.define('Xethya.DiceRolling.ChanceThrow', {
        inherits: [Xethya.DiceRolling.DiceThrow],
        config: {
            properties: {
                /**
                 * Stores the configuration of the chance throw, defining
                 the value range for each throw qualification.
                 *
                 * @instance
                 * @protected
                 * @this Xethya.DiceRolling.ChanceThrow
                 * @memberof Xethya.DiceRolling.ChanceThrow
                 * @function get_Settings
                 * @return  {Xethya.DiceRolling.ChanceThrowSettings}
                 */
                /**
                 * Stores the configuration of the chance throw, defining
                 the value range for each throw qualification.
                 *
                 * @instance
                 * @protected
                 * @this Xethya.DiceRolling.ChanceThrow
                 * @memberof Xethya.DiceRolling.ChanceThrow
                 * @function set_Settings
                 * @param   {Xethya.DiceRolling.ChanceThrowSettings}    value
                 * @return  {void}
                 */
                _Settings: null
            }
        },
        /**
         * Prepares a chance throw with a single d100.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.ChanceThrow
         * @memberof Xethya.DiceRolling.ChanceThrow
         * @return  {void}
         */
        constructor: function () {
            Xethya.DiceRolling.DiceThrow.prototype.$constructor.call(this, 1, 100);
    
            this.set_Settings(new Xethya.DiceRolling.ChanceThrowSettings("constructor"));
        },
        /**
         * Prepares a chance throw with a single d100, allowing to
         change the qualification bounds via a ChanceThrowSettings
         instance.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.ChanceThrow
         * @memberof Xethya.DiceRolling.ChanceThrow
         * @param   {Xethya.DiceRolling.ChanceThrowSettings}    settings
         * @return  {void}
         */
        constructor$1: function (settings) {
            Xethya.DiceRolling.DiceThrow.prototype.$constructor.call(this, 1, 100);
    
            this.set_Settings(settings);
        },
        /**
         * Rolls the chance throw.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.ChanceThrow
         * @memberof Xethya.DiceRolling.ChanceThrow
         * @return  {Xethya.DiceRolling.ChanceThrowResult}        The rolled dice, with a qualification of Failure, Success or Critical Success.
         */
        roll$1: function () {
            var diceThrow = Xethya.DiceRolling.DiceThrow.prototype.roll.call(this);
            var ctr = new Xethya.DiceRolling.ChanceThrowResult(diceThrow);
    
            if (this.get_Settings().getFailureRange().valueInRange$1(diceThrow.getRollSum())) {
                ctr.setThrowType(Xethya.DiceRolling.DiceThrowType.failure);
            }
            else  {
                if (this.get_Settings().getSuccessRange().valueInRange$1(diceThrow.getRollSum())) {
                    ctr.setThrowType(Xethya.DiceRolling.DiceThrowType.normal);
                }
                else  {
                    if (this.get_Settings().getCriticalSuccessRange().valueInRange$1(diceThrow.getRollSum())) {
                        ctr.setThrowType(Xethya.DiceRolling.DiceThrowType.critical);
                    }
                }
            }
    
            return ctr;
        }
    });
    
    /**
     * Contains information about the result of a chance throw.
     *
     * @public
     * @class Xethya.DiceRolling.ChanceThrowResult
     * @augments Xethya.DiceRolling.DiceThrowResult
     */
    Bridge.define('Xethya.DiceRolling.ChanceThrowResult', {
        inherits: [Xethya.DiceRolling.DiceThrowResult],
        config: {
            properties: {
                /**
                 * Establishes the type of the throw, being possible values:
                 Failure, Success or CriticalSuccess.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowResult
                 * @memberof Xethya.DiceRolling.ChanceThrowResult
                 * @function getThrowType
                 * @return  {Xethya.DiceRolling.DiceThrowType}
                 */
                /**
                 * Establishes the type of the throw, being possible values:
                 Failure, Success or CriticalSuccess.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.ChanceThrowResult
                 * @memberof Xethya.DiceRolling.ChanceThrowResult
                 * @function setThrowType
                 * @param   {Xethya.DiceRolling.DiceThrowType}    value
                 * @return  {void}
                 */
                ThrowType: 0
            }
        },
        /**
         * Configures the chance throw's result.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.ChanceThrowResult
         * @memberof Xethya.DiceRolling.ChanceThrowResult
         * @param   {Xethya.DiceRolling.DiceThrowResult}    throwResult    The original DiceThrowResult object from the base class DiceThrow.
         * @return  {void}
         */
        constructor: function (throwResult) {
            Xethya.DiceRolling.DiceThrowResult.prototype.$constructor.call(this);
    
            this.getRolls().addRange(throwResult.getRolls());
        }
    });
    
    /**
     * A dice implementation of two faces, such as the
     flip of a coin. Allows to calculate boolean
     decisions.
     *
     * @public
     * @class Xethya.DiceRolling.CoinFlip
     * @augments Xethya.DiceRolling.Dice
     */
    Bridge.define('Xethya.DiceRolling.CoinFlip', {
        inherits: [Xethya.DiceRolling.Dice],
        constructor: function () {
            Xethya.DiceRolling.Dice.prototype.$constructor.call(this, 2);
    
    
        }
    });
    
    Bridge.define('Xethya.DiceRolling.SkillThrow', {
        inherits: [Xethya.DiceRolling.ChanceThrow],
        config: {
            properties: {
                SkillValue: 0
            }
        },
        constructor: function (skillValue) {
            Xethya.DiceRolling.ChanceThrow.prototype.$constructor.call(this);
    
            this.setSkillValue(skillValue);
        },
        roll$2: function () {
            var result = this.roll$1();
            return new Xethya.DiceRolling.SkillThrowResult(this.getSkillValue(), result);
        }
    });
    
    Bridge.define('Xethya.DiceRolling.SkillThrowResult', {
        inherits: [Xethya.DiceRolling.ChanceThrowResult,Xethya.Common.Interfaces.IWithModifiers],
        config: {
            properties: {
                Modifiers: null,
                SkillValue: 0,
                FailureRoll: null
            }
        },
        constructor: function (skillValue, throwResult) {
            Xethya.DiceRolling.ChanceThrowResult.prototype.$constructor.call(this, throwResult);
    
            this.setSkillValue(skillValue);
            this.getRolls().addRange(throwResult.getRolls());
            this.setModifiers(new Bridge.List$1(Xethya.Entities.Modifier)());
        },
        getModifierSum: function () {
            return Bridge.Linq.Enumerable.from(this.getModifiers()).sum($_.Xethya.DiceRolling.SkillThrowResult.f1);
        },
        getTotalRollValue: function () {
            return this.getSkillValue() + this.getRollSum() + this.getModifierSum();
        }
    });
    
    Bridge.ns("Xethya.DiceRolling.SkillThrowResult", $_)
    
    Bridge.apply($_.Xethya.DiceRolling.SkillThrowResult, {
        f1: function (m) {
            return m.getValue();
        }
    });
    
    
    
    Bridge.init();
})(this);
