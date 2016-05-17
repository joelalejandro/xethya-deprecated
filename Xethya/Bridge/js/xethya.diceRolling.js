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
            for (var d = 0; d < numberOfDices; d = (d + 1) | 0) {
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
            dtr.setRolls(Bridge.Linq.Enumerable.from(this.get_Dice()).select($_.Xethya.DiceRolling.DiceThrow.f1).toList(Bridge.Int32));
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
            this.setRolls(new Bridge.List$1(Bridge.Int32)());
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
            this.setFailureRange(new Xethya.Common.ValueInterval(Bridge.Decimal(1), Bridge.Decimal(20)));
            this.setSuccessRange(new Xethya.Common.ValueInterval(Bridge.Decimal(21), Bridge.Decimal(90)));
            this.setCriticalSuccessRange(new Xethya.Common.ValueInterval(Bridge.Decimal(91), Bridge.Decimal(100)));
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
            this.setFailureRange(new Xethya.Common.ValueInterval(Bridge.Decimal(failureLowerBound), Bridge.Decimal(failureUpperBound)));
            this.setSuccessRange(new Xethya.Common.ValueInterval(Bridge.Decimal(successLowerBound), Bridge.Decimal(successUpperBound)));
            this.setCriticalSuccessRange(new Xethya.Common.ValueInterval(Bridge.Decimal(criticalSuccessLowerBound), Bridge.Decimal(criticalSuccessUpperBound)));
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
                return Bridge.Int.clip32(Math.ceil(mt.generateRandom() * this.getFaces()));
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
            /**
             * Represents a failed throw.
             *
             * @static
             * @public
             * @memberof Xethya.DiceRolling.DiceThrowType
             * @constant
             * @default 0
             * @type Xethya.DiceRolling.DiceThrowType
             */
            Failure: 0,
            /**
             * Represents a regular throw (can be considered successful).
             *
             * @static
             * @public
             * @memberof Xethya.DiceRolling.DiceThrowType
             * @constant
             * @default 1
             * @type Xethya.DiceRolling.DiceThrowType
             */
            Normal: 1,
            /**
             * Represents a rare throw (can be considered critically successful).
             *
             * @static
             * @public
             * @memberof Xethya.DiceRolling.DiceThrowType
             * @constant
             * @default 2
             * @type Xethya.DiceRolling.DiceThrowType
             */
            Critical: 2
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
    
            if (this.get_Settings().getFailureRange().valueInRange(Bridge.Decimal(diceThrow.getRollSum()))) {
                ctr.setThrowType(Xethya.DiceRolling.DiceThrowType.Failure);
            }
            else  {
                if (this.get_Settings().getSuccessRange().valueInRange(Bridge.Decimal(diceThrow.getRollSum()))) {
                    ctr.setThrowType(Xethya.DiceRolling.DiceThrowType.Normal);
                }
                else  {
                    if (this.get_Settings().getCriticalSuccessRange().valueInRange(Bridge.Decimal(diceThrow.getRollSum()))) {
                        ctr.setThrowType(Xethya.DiceRolling.DiceThrowType.Critical);
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
        /**
         * Instantiates a coinflip-type dice, with two faces.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.CoinFlip
         * @memberof Xethya.DiceRolling.CoinFlip
         * @return  {void}
         */
        constructor: function () {
            Xethya.DiceRolling.Dice.prototype.$constructor.call(this, 2);
    
    
        }
    });
    
    /**
     * A skill throw derives from a chance throw, linked to a
     skill. It runs a d100 throw and sums to the result
     the skill's computed value (= core value + modifier sum)
     and the skill's associated attributes' values combined.
     *
     * @public
     * @class Xethya.DiceRolling.SkillThrow
     * @augments Xethya.DiceRolling.ChanceThrow
     * @implements  Xethya.Common.Interfaces.IWithModifiers
     */
    Bridge.define('Xethya.DiceRolling.SkillThrow', {
        inherits: [Xethya.DiceRolling.ChanceThrow,Xethya.Common.Interfaces.IWithModifiers],
        config: {
            properties: {
                /**
                 * References the skill being executed for the roll.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrow
                 * @memberof Xethya.DiceRolling.SkillThrow
                 * @function getSkillBeingThrown
                 * @return  {Xethya.Entities.Skill}
                 */
                /**
                 * References the skill being executed for the roll.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrow
                 * @memberof Xethya.DiceRolling.SkillThrow
                 * @function setSkillBeingThrown
                 * @param   {Xethya.Entities.Skill}    value
                 * @return  {void}
                 */
                SkillBeingThrown: null,
                /**
                 * Contains all of the modifiers referenced by the skill's attributes.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrow
                 * @memberof Xethya.DiceRolling.SkillThrow
                 * @function getModifiers
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Contains all of the modifiers referenced by the skill's attributes.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrow
                 * @memberof Xethya.DiceRolling.SkillThrow
                 * @function setModifiers
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Modifiers: null
            }
        },
        /**
         * Prepares a skill throw.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.SkillThrow
         * @memberof Xethya.DiceRolling.SkillThrow
         * @param   {Xethya.Entities.Skill}    skill    The skill being used.
         * @return  {void}
         */
        constructor: function (skill) {
            Xethya.DiceRolling.ChanceThrow.prototype.$constructor.call(this);
    
            this.setSkillBeingThrown(skill);
        },
        /**
         * Returns the sum of all registered modifiers' value.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.SkillThrow
         * @memberof Xethya.DiceRolling.SkillThrow
         * @function getModifierSum
         * @return  {number}
         */
        /**
         * Returns the sum of all registered modifiers' value.
         *
         * @instance
         * @function setModifierSum
         */
        getModifierSum: function () {
            return Bridge.Linq.Enumerable.from(this.getModifiers()).sum($_.Xethya.DiceRolling.SkillThrow.f1);
        },
        /**
         * Rolls the dice, considering the skill's computed value.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.SkillThrow
         * @memberof Xethya.DiceRolling.SkillThrow
         * @return  {Xethya.DiceRolling.SkillThrowResult}        The result of the skill throw, indicating if the roll
         was a failure or not.
         */
        roll$2: function () {
            var result = this.roll$1();
            return new Xethya.DiceRolling.SkillThrowResult(this.getSkillBeingThrown().getComputedValue(), this.getModifierSum(), result);
        }
    });
    
    Bridge.ns("Xethya.DiceRolling.SkillThrow", $_)
    
    Bridge.apply($_.Xethya.DiceRolling.SkillThrow, {
        f1: function (m) {
            return m.getValue();
        }
    });
    
    /**
     * Contains data about the outcome of using a skill. A skill throw result
     is derived from a chance throw, but, as the SkillThrow class, it considers
     the skill's computed value (including modifiers) and the modifiers for
     each of the skill's designated attributes.
     *
     * @public
     * @class Xethya.DiceRolling.SkillThrowResult
     * @augments Xethya.DiceRolling.ChanceThrowResult
     */
    Bridge.define('Xethya.DiceRolling.SkillThrowResult', {
        inherits: [Xethya.DiceRolling.ChanceThrowResult],
        config: {
            properties: {
                /**
                 * References the skill's (computed) value.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrowResult
                 * @memberof Xethya.DiceRolling.SkillThrowResult
                 * @function getSkillValue
                 * @return  {number}
                 */
                /**
                 * References the skill's (computed) value.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrowResult
                 * @memberof Xethya.DiceRolling.SkillThrowResult
                 * @function setSkillValue
                 * @param   {number}    value
                 * @return  {void}
                 */
                SkillValue: Bridge.Decimal(0.0),
                /**
                 * References the sum of each of the modifiers associated to
                 each of the skill's attributes.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrowResult
                 * @memberof Xethya.DiceRolling.SkillThrowResult
                 * @function getSkillAttributeModifiersValue
                 * @return  {number}
                 */
                /**
                 * References the sum of each of the modifiers associated to
                 each of the skill's attributes.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrowResult
                 * @memberof Xethya.DiceRolling.SkillThrowResult
                 * @function setSkillAttributeModifiersValue
                 * @param   {number}    value
                 * @return  {void}
                 */
                SkillAttributeModifiersValue: Bridge.Decimal(0.0),
                /**
                 * If the skill has failed, this contains more data about
                 how severe the failure was. For instance, it allows to
                 ascertain if it was a critical failure or an almost-successful
                 throw.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrowResult
                 * @memberof Xethya.DiceRolling.SkillThrowResult
                 * @function getFailureRoll
                 * @return  {Xethya.DiceRolling.ChanceThrowResult}
                 */
                /**
                 * If the skill has failed, this contains more data about
                 how severe the failure was. For instance, it allows to
                 ascertain if it was a critical failure or an almost-successful
                 throw.
                 *
                 * @instance
                 * @public
                 * @this Xethya.DiceRolling.SkillThrowResult
                 * @memberof Xethya.DiceRolling.SkillThrowResult
                 * @function setFailureRoll
                 * @param   {Xethya.DiceRolling.ChanceThrowResult}    value
                 * @return  {void}
                 */
                FailureRoll: null
            }
        },
        /**
         * Instantiates the skill throw's result structure.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.SkillThrowResult
         * @memberof Xethya.DiceRolling.SkillThrowResult
         * @param   {number}                                skillValue                      The skill's computed value.
         * @param   {number}                                skillAttributeModifiersValue    The sum of the modifiers of the attributes contained in the skill.
         * @param   {Xethya.DiceRolling.DiceThrowResult}    throwResult                     The dice roll result.
         * @return  {void}
         */
        constructor: function (skillValue, skillAttributeModifiersValue, throwResult) {
            Xethya.DiceRolling.ChanceThrowResult.prototype.$constructor.call(this, throwResult);
    
            this.setSkillValue(skillValue);
            this.setSkillAttributeModifiersValue(skillAttributeModifiersValue);
            this.getRolls().addRange(throwResult.getRolls());
        },
        /**
         * Returns the final sum of the dice throw. It sums the skill's
         computed value and the roll's value, as well as the modifiers
         of the skill's attributes.
         *
         * @instance
         * @public
         * @this Xethya.DiceRolling.SkillThrowResult
         * @memberof Xethya.DiceRolling.SkillThrowResult
         * @function getTotalRollValue
         * @return  {number}
         */
        /**
         * Returns the final sum of the dice throw. It sums the skill's
         computed value and the roll's value, as well as the modifiers
         of the skill's attributes.
         *
         * @instance
         * @function setTotalRollValue
         */
        getTotalRollValue: function () {
            return this.getSkillValue().add(Bridge.Decimal(this.getRollSum())).add(this.getSkillAttributeModifiersValue());
        }
    });
    
    
    
    Bridge.init();
})(this);
