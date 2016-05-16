(function (globals) {
    "use strict";

    /** @namespace System */
    
    /**
     * @memberof System
     * @callback System.Func
     * @param   {Bridge.List$1}    arg1    
     * @param   {Bridge.List$1}    arg2
     * @return  {number}
     */
    
    /** @namespace Xethya.Entities */
    
    /**
     * @static
     * @abstract
     * @public
     * @class Xethya.Entities.AttributeExtensions
     */
    Bridge.define('Xethya.Entities.AttributeExtensions', {
        statics: {
            /**
             * @static
             * @public
             * @this Xethya.Entities.AttributeExtensions
             * @memberof Xethya.Entities.AttributeExtensions
             * @param   {Bridge.List$1}                obj     
             * @param   {string}                       name
             * @return  {Xethya.Entities.Attribute}
             */
            byName: function (obj, name) {
                return Bridge.Linq.Enumerable.from(obj).single(function (a) {
                    return a.getName() === name;
                });
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.AttributeExtensions
             * @memberof Xethya.Entities.AttributeExtensions
             * @param   {Bridge.List$1}    obj
             * @return  {void}
             */
            rollAllValues: function (obj) {
                var $t;
                $t = Bridge.getEnumerator(obj);
                while ($t.moveNext()) {
                    var attribute = $t.getCurrent();
                    attribute.setValue(new Xethya.DiceRolling.Dice(attribute.getUpperBound()).roll());
                }
            }
        }
    });
    
    /**
     * @public
     * @class Xethya.Entities.EntityAlignment
     */
    Bridge.define('Xethya.Entities.EntityAlignment', {
        statics: {
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getLawfulGood
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setLawfulGood
             */
            getLawfulGood: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.good, Xethya.Entities.Order.lawful);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getLawfulNeutral
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setLawfulNeutral
             */
            getLawfulNeutral: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.neutral, Xethya.Entities.Order.lawful);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getLawfulEvil
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setLawfulEvil
             */
            getLawfulEvil: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.evil, Xethya.Entities.Order.lawful);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getNeutralGood
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setNeutralGood
             */
            getNeutralGood: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.good, Xethya.Entities.Order.neutral);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getNeutral
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setNeutral
             */
            getNeutral: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.neutral, Xethya.Entities.Order.neutral);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getNeutralEvil
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setNeutralEvil
             */
            getNeutralEvil: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.evil, Xethya.Entities.Order.neutral);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getChaoticGood
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setChaoticGood
             */
            getChaoticGood: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.good, Xethya.Entities.Order.chaotic);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getChaoticNeutral
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setChaoticNeutral
             */
            getChaoticNeutral: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.neutral, Xethya.Entities.Order.chaotic);
            },
            /**
             * @static
             * @public
             * @this Xethya.Entities.EntityAlignment
             * @memberof Xethya.Entities.EntityAlignment
             * @function getChaoticEvil
             * @return  {Xethya.Entities.EntityAlignment}
             */
            /**
             * @instance
             * @function setChaoticEvil
             */
            getChaoticEvil: function () {
                return new Xethya.Entities.EntityAlignment(Xethya.Entities.Moral.evil, Xethya.Entities.Order.chaotic);
            }
        },
        config: {
            properties: {
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityAlignment
                 * @memberof Xethya.Entities.EntityAlignment
                 * @function getMoral
                 * @return  {Xethya.Entities.Moral}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityAlignment
                 * @memberof Xethya.Entities.EntityAlignment
                 * @function setMoral
                 * @param   {Xethya.Entities.Moral}    value
                 * @return  {void}
                 */
                Moral: 0,
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityAlignment
                 * @memberof Xethya.Entities.EntityAlignment
                 * @function getOrder
                 * @return  {Xethya.Entities.Order}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityAlignment
                 * @memberof Xethya.Entities.EntityAlignment
                 * @function setOrder
                 * @param   {Xethya.Entities.Order}    value
                 * @return  {void}
                 */
                Order: 0
            }
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.EntityAlignment
         * @memberof Xethya.Entities.EntityAlignment
         * @param   {Xethya.Entities.Moral}    moral    
         * @param   {Xethya.Entities.Order}    order
         * @return  {void}
         */
        constructor: function (moral, order) {
            this.setMoral(moral);
            this.setOrder(order);
        }
    });
    
    /**
     * A container that keeps track of all non-volatile entities
     in the game.
     *
     * @static
     * @abstract
     * @public
     * @class Xethya.Entities.EntityContainer
     */
    Bridge.define('Xethya.Entities.EntityContainer', {
        statics: {
            config: {
                properties: {
                    /**
                     * Contains all registered entities.
                     *
                     * @static
                     * @private
                     * @this Xethya.Entities.EntityContainer
                     * @memberof Xethya.Entities.EntityContainer
                     * @function get_Container
                     * @return  {Bridge.Dictionary$2}
                     */
                    /**
                     * Contains all registered entities.
                     *
                     * @static
                     * @private
                     * @this Xethya.Entities.EntityContainer
                     * @memberof Xethya.Entities.EntityContainer
                     * @function set_Container
                     * @param   {Bridge.Dictionary$2}    value
                     * @return  {void}
                     */
                    _Container: null
                }
            },
            /**
             * Initializes the container for the first time. This method
             is automatically called from the Entity base class constructor,
             and it should be called just from there. All other calls would
             be effectless.
             *
             * @static
             * @public
             * @this Xethya.Entities.EntityContainer
             * @memberof Xethya.Entities.EntityContainer
             * @return  {void}
             */
            initializeIfNeeded: function () {
                if (!Bridge.hasValue(Bridge.get(Xethya.Entities.EntityContainer).get_Container())) {
                    Bridge.get(Xethya.Entities.EntityContainer).set_Container(new Bridge.Dictionary$2(String,Xethya.Entities.Entity)());
                }
            },
            /**
             * Adds an entity to the container.
             *
             * @static
             * @public
             * @this Xethya.Entities.EntityContainer
             * @memberof Xethya.Entities.EntityContainer
             * @param   {Xethya.Entities.Entity}    entity    The entity to register. It must be a non-volatile entity.
             * @return  {void}
             */
            register: function (entity) {
                if (entity.getIsVolatile()) {
                    throw new Bridge.ArgumentException("The entity must be non-volatile in order to be registered in the Container. Set IsVolatile to true in order to do so");
                }
    
                Bridge.get(Xethya.Entities.EntityContainer).get_Container().add(entity.getID(), entity);
            },
            /**
             * Returns an entity looking it up in the Container by its GUID.
             *
             * @static
             * @public
             * @this Xethya.Entities.EntityContainer
             * @memberof Xethya.Entities.EntityContainer
             * @param   {string}                    guid    The entity's GUID.
             * @return  {Xethya.Entities.Entity}            The entity itself.
             */
            lookup: function (guid) {
                return Bridge.get(Xethya.Entities.EntityContainer).get_Container().get(guid);
            },
            /**
             * If the engine is running in debug mode, it returns
             a raw reference to the container. Otherwise, this methods
             does nothing.
             *
             * @static
             * @public
             * @this Xethya.Entities.EntityContainer
             * @memberof Xethya.Entities.EntityContainer
             * @return  {Bridge.Dictionary$2}        The EntityContainer class' static container.
             */
            __GetContainer: function () {
                if (Bridge.global["__XETHYA_DEBUG__"]) {
                    return Bridge.get(Xethya.Entities.EntityContainer).get_Container();
                }
                else  {
                    return null;
                }
            }
        }
    });
    
    /**
     * A modifier alters the raw value of an attribute or skill.
     It can enhance or undermine the effect produced by either
     feature of the entity.
     *
     * @public
     * @class Xethya.Entities.Modifier
     */
    Bridge.define('Xethya.Entities.Modifier', {
        config: {
            properties: {
                /**
                 * A unique identifier for the modifier. It can be
                 an internal game reference, such as "strengthRaceBonus"
                 or a GUID, such as "00000123F-213A-1242-54CA-12347ACB21AA".
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function getID
                 * @return  {string}
                 */
                /**
                 * A unique identifier for the modifier. It can be
                 an internal game reference, such as "strengthRaceBonus"
                 or a GUID, such as "00000123F-213A-1242-54CA-12347ACB21AA".
                 *
                 * @instance
                 * @private
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function setID
                 * @param   {string}    value
                 * @return  {void}
                 */
                ID: null,
                /**
                 * The value which is used to affect the associated skill
                 or attribute.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function getValue
                 * @return  {number}
                 */
                /**
                 * The value which is used to affect the associated skill
                 or attribute.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function setValue
                 * @param   {number}    value
                 * @return  {void}
                 */
                Value: 0,
                /**
                 * A string identifier representing the reason why this
                 modifier is in effect.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function getSource
                 * @return  {string}
                 */
                /**
                 * A string identifier representing the reason why this
                 modifier is in effect.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function setSource
                 * @param   {string}    value
                 * @return  {void}
                 */
                Source: null,
                /**
                 * Whether is modifier is in effect or not. Defaults to true.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function getActive
                 * @return  {boolean}
                 */
                /**
                 * Whether is modifier is in effect or not. Defaults to true.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Modifier
                 * @memberof Xethya.Entities.Modifier
                 * @function setActive
                 * @param   {boolean}    value
                 * @return  {void}
                 */
                Active: false
            }
        },
        /**
         * Generates an active modifier with a GUID as identifier.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Modifier
         * @memberof Xethya.Entities.Modifier
         * @return  {void}
         */
        constructor: function () {
            this.setID(Bridge.get(Xethya.Common.Guid).generate());
            this.setActive(true);
        },
        /**
         * Generates an active modifier with a given identifier.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Modifier
         * @memberof Xethya.Entities.Modifier
         * @param   {string}    id    The new modifier's identifier.
         * @return  {void}
         */
        constructor$1: function (id) {
            this.setID(id);
            this.setActive(true);
        },
        /**
         * Activates the modifier.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Modifier
         * @memberof Xethya.Entities.Modifier
         * @return  {void}
         */
        activate: function () {
            this.setActive(true);
        },
        /**
         * Deactivates the modifier. This can be used for suspending
         the effect of this modifier for a period of time, from an
         external source.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Modifier
         * @memberof Xethya.Entities.Modifier
         * @return  {void}
         */
        deactivate: function () {
            this.setActive(false);
        }
    });
    
    /**
     * @public
     * @class Xethya.Entities.Moral
     */
    Bridge.define('Xethya.Entities.Moral', {
        statics: {
            /**
             * @static
             * @public
             * @memberof Xethya.Entities.Moral
             * @constant
             * @default 0
             * @type Xethya.Entities.Moral
             */
            good: 0,
            /**
             * @static
             * @public
             * @memberof Xethya.Entities.Moral
             * @constant
             * @default 1
             * @type Xethya.Entities.Moral
             */
            neutral: 1,
            /**
             * @static
             * @public
             * @memberof Xethya.Entities.Moral
             * @constant
             * @default 2
             * @type Xethya.Entities.Moral
             */
            evil: 2
        },
        $enum: true
    });
    
    /**
     * @public
     * @class Xethya.Entities.Order
     */
    Bridge.define('Xethya.Entities.Order', {
        statics: {
            /**
             * @static
             * @public
             * @memberof Xethya.Entities.Order
             * @constant
             * @default 0
             * @type Xethya.Entities.Order
             */
            lawful: 0,
            /**
             * @static
             * @public
             * @memberof Xethya.Entities.Order
             * @constant
             * @default 1
             * @type Xethya.Entities.Order
             */
            neutral: 1,
            /**
             * @static
             * @public
             * @memberof Xethya.Entities.Order
             * @constant
             * @default 2
             * @type Xethya.Entities.Order
             */
            chaotic: 2
        },
        $enum: true
    });
    
    /**
     * @static
     * @abstract
     * @public
     * @class Xethya.Entities.SkillExtensions
     */
    Bridge.define('Xethya.Entities.SkillExtensions', {
        statics: {
            /**
             * @static
             * @public
             * @this Xethya.Entities.SkillExtensions
             * @memberof Xethya.Entities.SkillExtensions
             * @param   {Bridge.List$1}            obj     
             * @param   {string}                   name
             * @return  {Xethya.Entities.Skill}
             */
            byName: function (obj, name) {
                return Bridge.Linq.Enumerable.from(obj).single(function (s) {
                    return s.getName() === name;
                });
            }
        }
    });
    
    /**
     * @static
     * @abstract
     * @public
     * @class Xethya.Entities.StatExtensions
     */
    Bridge.define('Xethya.Entities.StatExtensions', {
        statics: {
            /**
             * @static
             * @public
             * @this Xethya.Entities.StatExtensions
             * @memberof Xethya.Entities.StatExtensions
             * @param   {Bridge.List$1}           obj     
             * @param   {string}                  name
             * @return  {Xethya.Entities.Stat}
             */
            byName: function (obj, name) {
                return Bridge.Linq.Enumerable.from(obj).single(function (s) {
                    return s.getName() === name;
                });
            }
        }
    });
    
    /**
     * An attribute represents an aspect of an entity, such as its strength,
     power, presence, and so forth. It has a value range (minimum and maximum),
     hence it derives from the ValueInterval class. It also implements the
     INameable and IWithModifiers interfaces; thus, an attribute can be named
     and altered via modifiers.
     *
     * @public
     * @class Xethya.Entities.Attribute
     * @augments Xethya.Common.ValueInterval
     * @implements  Xethya.Common.Interfaces.INameable
     * @implements  Xethya.Common.Interfaces.IWithModifiers
     */
    Bridge.define('Xethya.Entities.Attribute', {
        inherits: [Xethya.Common.ValueInterval,Xethya.Common.Interfaces.INameable,Xethya.Common.Interfaces.IWithModifiers],
        /**
         * Contains the attribute's base value, with no modifiers applied.
         *
         * @instance
         * @protected
         * @memberof Xethya.Entities.Attribute
         * @type number
         */
        _Value: 0,
        config: {
            properties: {
                /**
                 * Returns the attribute's unique ID (unless overriden in the 
                 constructor, this is a GUID value).
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Attribute
                 * @memberof Xethya.Entities.Attribute
                 * @function getID
                 * @return  {string}
                 */
                /**
                 * Returns the attribute's unique ID (unless overriden in the 
                 constructor, this is a GUID value).
                 *
                 * @instance
                 * @private
                 * @this Xethya.Entities.Attribute
                 * @memberof Xethya.Entities.Attribute
                 * @function setID
                 * @param   {string}    value
                 * @return  {void}
                 */
                ID: null,
                /**
                 * References the attribute's name.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Attribute
                 * @memberof Xethya.Entities.Attribute
                 * @function getName
                 * @return  {string}
                 */
                /**
                 * References the attribute's name.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Attribute
                 * @memberof Xethya.Entities.Attribute
                 * @function setName
                 * @param   {string}    value
                 * @return  {void}
                 */
                Name: null,
                /**
                 * Contains a list of all of the attribute's modifiers. A modifier
                 registered here can alter the value of the attribute (whether it
                 boosts or penalizes such value).
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Attribute
                 * @memberof Xethya.Entities.Attribute
                 * @function getModifiers
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Contains a list of all of the attribute's modifiers. A modifier
                 registered here can alter the value of the attribute (whether it
                 boosts or penalizes such value).
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Attribute
                 * @memberof Xethya.Entities.Attribute
                 * @function setModifiers
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Modifiers: null
            }
        },
        /**
         * Instantiates a new attribute. By default, the allowed values for it
         are all non-negative integers up to the 32-bit limit.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @param   {string}    name    The new attribute's name.
         * @return  {void}
         */
        constructor: function (name) {
            Xethya.Common.ValueInterval.prototype.$constructor.call(this, 0, 2147483647);
    
            this.setID(Bridge.get(Xethya.Common.Guid).generate());
            this.setName(name);
            this.setModifiers(new Bridge.List$1(Xethya.Entities.Modifier)());
        },
        /**
         * Instantiates a new attribute, with a given value range.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @param   {string}                         name          The new attribute's name.
         * @param   {Xethya.Common.ValueInterval}    valueRange    An instane of ValueInterval, containing the lower and upper limits of the value range.
         * @return  {void}
         */
        constructor$1: function (name, valueRange) {
            Xethya.Common.ValueInterval.prototype.$constructor.call(this, valueRange.getLowerBound(), valueRange.getUpperBound());
    
            this.setID(Bridge.get(Xethya.Common.Guid).generate());
            this.setName(name);
            this.setModifiers(new Bridge.List$1(Xethya.Entities.Modifier)());
        },
        /**
         * Returns the sum of all registered modifiers. An attribute (unless
         overriden) has always at least a base modifier.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @function getModifierSum
         * @return  {number}
         */
        /**
         * Returns the sum of all registered modifiers. An attribute (unless
         overriden) has always at least a base modifier.
         *
         * @instance
         * @function setModifierSum
         */
        getModifierSum: function () {
            return Bridge.Linq.Enumerable.from(this.getModifiers()).sum($_.Xethya.Entities.Attribute.f1);
        },
        /**
         * Returns the attribute's base modifier.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @function getBaseModifier
         * @return  {number}
         */
        /**
         * Returns the attribute's base modifier.
         *
         * @instance
         * @function setBaseModifier
         */
        getBaseModifier: function () {
            return Bridge.Linq.Enumerable.from(this.getModifiers()).first().getValue();
        },
        /**
         * References the attribute's base value, without modifiers. When setting
         the value, it'll check if the value is in the attribute's defined range
         and recalculate the base modifier as well. If the set value is out of
         range, an exception will be thrown.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @function getValue
         * @return  {number}
         */
        /**
         * References the attribute's base value, without modifiers. When setting
         the value, it'll check if the value is in the attribute's defined range
         and recalculate the base modifier as well. If the set value is out of
         range, an exception will be thrown.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @function setValue
         * @param   {number}    value
         * @return  {void}
         */
        getValue: function () {
            return this._Value;
        },
        /**
         * References the attribute's base value, without modifiers. When setting
         the value, it'll check if the value is in the attribute's defined range
         and recalculate the base modifier as well. If the set value is out of
         range, an exception will be thrown.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @function getValue
         * @return  {number}
         */
        /**
         * References the attribute's base value, without modifiers. When setting
         the value, it'll check if the value is in the attribute's defined range
         and recalculate the base modifier as well. If the set value is out of
         range, an exception will be thrown.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @function setValue
         * @param   {number}    value
         * @return  {void}
         */
        setValue: function (value) {
            if (this.valueInRange(value)) {
                this._Value = value;
                this._RefreshBaseModifier();
            }
            else  {
                throw new Bridge.ArgumentOutOfRangeException("Value", "Attribute " + this.getName() + " has a value out of range " + Xethya.Common.ValueInterval.prototype.toString.call(this));
            }
        },
        /**
         * Returns the attribute's computed value (that is, its core value and
         the sum of all registered modifiers).
         *
         * @instance
         * @public
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @function getComputedValue
         * @return  {number}
         */
        /**
         * Returns the attribute's computed value (that is, its core value and
         the sum of all registered modifiers).
         *
         * @instance
         * @function setComputedValue
         */
        getComputedValue: function () {
            return this.getValue() + this.getModifierSum();
        },
        /**
         * When the value of the attribute is changed, this method recalculates the
         base modifier. The base modifier is the first modifier registered in the
         list (Modifiers[0]), and (unless overriden), the method calculates its
         value as the 15% of the attribute's value.
         *
         * @instance
         * @protected
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @return  {void}
         */
        _RefreshBaseModifier: function () {
            var baseModifier = new Xethya.Entities.Modifier("constructor$1", "baseModifier");
            baseModifier.setSource(null);
            baseModifier.setValue(Bridge.Convert.toInt32(Bridge.Decimal(this.getValue()).mul(Bridge.Decimal(0.15))));
            if (this.getModifiers().getCount() === 0) {
                this.getModifiers().add(baseModifier);
            }
            else  {
                this.getModifiers().setItem(0, baseModifier);
            }
        },
        /**
         * @instance
         * @public
         * @override
         * @this Xethya.Entities.Attribute
         * @memberof Xethya.Entities.Attribute
         * @return  {string}
         */
        toString: function () {
            var sign = this.getModifierSum() >= 0 ? "+" : "-";
            return this.getValue().toString() + " (" + sign + this.getModifierSum().toString() + ")";
        }
    });
    
    var $_ = {};
    
    Bridge.ns("Xethya.Entities.Attribute", $_)
    
    Bridge.apply($_.Xethya.Entities.Attribute, {
        f1: function (m) {
            return m.getValue();
        }
    });
    
    /**
     * An entity represents a element in the world. As such,
     it has an unique ID and a name. This is the base class
     for all definable entities; every entity must derive
     from this class.
     *
     * @abstract
     * @public
     * @class Xethya.Entities.Entity
     * @implements  Xethya.Common.Interfaces.INameable
     * @implements  Xethya.Common.Interfaces.IWithAttributes
     */
    Bridge.define('Xethya.Entities.Entity', {
        inherits: [Xethya.Common.Interfaces.INameable,Xethya.Common.Interfaces.IWithAttributes],
        config: {
            properties: {
                /**
                 * Contains the entity's GUID. Can only be set
                 at class instantiation.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function getID
                 * @return  {string}
                 */
                /**
                 * Contains the entity's GUID. Can only be set
                 at class instantiation.
                 *
                 * @instance
                 * @private
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function setID
                 * @param   {string}    value
                 * @return  {void}
                 */
                ID: null,
                /**
                 * Contains a descriptive name for the entity.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function getName
                 * @return  {string}
                 */
                /**
                 * Contains a descriptive name for the entity.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function setName
                 * @param   {string}    value
                 * @return  {void}
                 */
                Name: null,
                /**
                 * Determines if an entity is cached in the container or not.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function getIsVolatile
                 * @return  {boolean}
                 */
                /**
                 * Determines if an entity is cached in the container or not.
                 *
                 * @instance
                 * @private
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function setIsVolatile
                 * @param   {boolean}    value
                 * @return  {void}
                 */
                IsVolatile: false,
                /**
                 * Returns the list of attributes associated to this entity.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function getAttributes
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Returns the list of attributes associated to this entity.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function setAttributes
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Attributes: null,
                /**
                 * Determines if the entity is alive or not.
                 It defaults to false. Any derived of LivingEntity
                 such set this property to True.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function getIsAlive
                 * @return  {boolean}
                 */
                /**
                 * Determines if the entity is alive or not.
                 It defaults to false. Any derived of LivingEntity
                 such set this property to True.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Entity
                 * @memberof Xethya.Entities.Entity
                 * @function setIsAlive
                 * @param   {boolean}    value
                 * @return  {void}
                 */
                IsAlive: false
            }
        },
        /**
         * Instantiates the entity, assigning it a unique ID.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Entity
         * @memberof Xethya.Entities.Entity
         * @return  {void}
         */
        constructor: function () {
            this.setID(Bridge.get(Xethya.Common.Guid).generate());
            this.setIsVolatile(false);
            this.setIsAlive(false);
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
    
            this._RegisterInContainerIfNeeded();
        },
        /**
         * Instantiates the entity with a given name.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Entity
         * @memberof Xethya.Entities.Entity
         * @param   {string}    name    The entity's name.
         * @return  {void}
         */
        constructor$1: function (name) {
            this.setID(Bridge.get(Xethya.Common.Guid).generate());
            this.setName(name);
            this.setIsVolatile(false);
            this.setIsAlive(false);
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
    
            this._RegisterInContainerIfNeeded();
        },
        /**
         * If the entity is non-volatile, it'll be registered in the 
         container via this method.
         *
         * @instance
         * @private
         * @this Xethya.Entities.Entity
         * @memberof Xethya.Entities.Entity
         * @return  {void}
         */
        _RegisterInContainerIfNeeded: function () {
            if (this.getIsVolatile()) {
                return;
            }
    
            Bridge.get(Xethya.Entities.EntityContainer).initializeIfNeeded();
            Bridge.get(Xethya.Entities.EntityContainer).register(this);
        },
        /**
         * Gets an entity's attribute.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Entity
         * @memberof Xethya.Entities.Entity
         * @param   {string}                       attributeName    The name of the attribute.
         * @return  {Xethya.Entities.Attribute}                     The requested attribute.
         */
        getAttributeByName: function (attributeName) {
            return Bridge.Linq.Enumerable.from(this.getAttributes()).single(function (a) {
                return a.getName() === attributeName;
            });
        }
    });
    
    /**
     * @public
     * @class Xethya.Entities.EntityRace
     * @implements  Xethya.Common.Interfaces.INameable
     * @implements  Xethya.Common.Interfaces.IWithAttributes
     * @implements  Xethya.Common.Interfaces.IWithSkills
     * @implements  Xethya.Common.Interfaces.IWithStats
     */
    Bridge.define('Xethya.Entities.EntityRace', {
        inherits: [Xethya.Common.Interfaces.INameable,Xethya.Common.Interfaces.IWithAttributes,Xethya.Common.Interfaces.IWithSkills,Xethya.Common.Interfaces.IWithStats],
        config: {
            properties: {
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function getLifeExpectancy
                 * @return  {number}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function setLifeExpectancy
                 * @param   {number}    value
                 * @return  {void}
                 */
                LifeExpectancy: 0,
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function getDefaultAlignment
                 * @return  {Xethya.Entities.EntityAlignment}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function setDefaultAlignment
                 * @param   {Xethya.Entities.EntityAlignment}    value
                 * @return  {void}
                 */
                DefaultAlignment: null,
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function getName
                 * @return  {string}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function setName
                 * @param   {string}    value
                 * @return  {void}
                 */
                Name: null,
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function getAttributes
                 * @return  {Bridge.List$1}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function setAttributes
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Attributes: null,
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function getSkills
                 * @return  {Bridge.List$1}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function setSkills
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Skills: null,
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function getStats
                 * @return  {Bridge.List$1}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.EntityRace
                 * @memberof Xethya.Entities.EntityRace
                 * @function setStats
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Stats: null
            }
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.EntityRace
         * @memberof Xethya.Entities.EntityRace
         * @param   {string}    name
         * @return  {void}
         */
        constructor: function (name) {
            this.setName(name);
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
            this.setSkills(new Bridge.List$1(Xethya.Entities.Skill)());
            this.setStats(new Bridge.List$1(Xethya.Entities.Stat)());
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.EntityRace
         * @memberof Xethya.Entities.EntityRace
         * @param   {string}                       attributeName
         * @return  {Xethya.Entities.Attribute}
         */
        getAttributeByName: function (attributeName) {
            return Xethya.Entities.AttributeExtensions.byName(this.getAttributes(), attributeName);
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.EntityRace
         * @memberof Xethya.Entities.EntityRace
         * @param   {string}                   skillName
         * @return  {Xethya.Entities.Skill}
         */
        getSkillByName: function (skillName) {
            return Xethya.Entities.SkillExtensions.byName(this.getSkills(), skillName);
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.EntityRace
         * @memberof Xethya.Entities.EntityRace
         * @param   {string}                  statName
         * @return  {Xethya.Entities.Stat}
         */
        getStatByName: function (statName) {
            return Xethya.Entities.StatExtensions.byName(this.getStats(), statName);
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.EntityRace
         * @memberof Xethya.Entities.EntityRace
         * @param   {string}    attributeName    
         * @param   {number}    value
         * @return  {void}
         */
        defineAttributeBoost: function (attributeName, value) {
            var attribute = new Xethya.Entities.Attribute("constructor", attributeName);
            attribute.setValue(value);
            this.getAttributes().add(attribute);
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.EntityRace
         * @memberof Xethya.Entities.EntityRace
         * @param   {string}    statName    
         * @param   {number}    value
         * @return  {void}
         */
        defineStatBoost: function (statName, value) {
            var stat = new Xethya.Entities.Stat("constructor", statName);
            var modifier = new Xethya.Entities.Modifier("constructor");
            modifier.setValue(value);
            stat.getModifiers().insert(1, modifier);
            this.getStats().add(stat);
        }
    });
    
    /**
     * A skilled entity is a derivative of the base Entity class,
     allowing to register skills associated to it. Thus, this entity
     can perform actions.
     *
     * @abstract
     * @public
     * @class Xethya.Entities.SkilledEntity
     * @augments Xethya.Entities.Entity
     * @implements  Xethya.Common.Interfaces.IWithSkills
     * @implements  Xethya.Common.Interfaces.ICanUseSkills
     */
    Bridge.define('Xethya.Entities.SkilledEntity', {
        inherits: [Xethya.Entities.Entity,Xethya.Common.Interfaces.IWithSkills,Xethya.Common.Interfaces.ICanUseSkills],
        config: {
            properties: {
                /**
                 * Contains every action this entity can perform.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.SkilledEntity
                 * @memberof Xethya.Entities.SkilledEntity
                 * @function getSkills
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Contains every action this entity can perform.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.SkilledEntity
                 * @memberof Xethya.Entities.SkilledEntity
                 * @function setSkills
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Skills: null
            }
        },
        /**
         * Creates a new instance of the SkilledEntity class.
         *
         * @instance
         * @public
         * @this Xethya.Entities.SkilledEntity
         * @memberof Xethya.Entities.SkilledEntity
         * @return  {void}
         */
        constructor: function () {
            Xethya.Entities.Entity.prototype.$constructor.call(this);
    
            this.setSkills(new Bridge.List$1(Xethya.Entities.Skill)());
        },
        /**
         * Creates a new skilled entity, with a given name.
         *
         * @instance
         * @public
         * @this Xethya.Entities.SkilledEntity
         * @memberof Xethya.Entities.SkilledEntity
         * @param   {string}    name    The entity's name.
         * @return  {void}
         */
        constructor$1: function (name) {
            Xethya.Entities.Entity.prototype.constructor$1.call(this, name);
    
            this.setSkills(new Bridge.List$1(Xethya.Entities.Skill)());
        },
        /**
         * Gets a skill from the Skills list, by its name.
         *
         * @instance
         * @public
         * @this Xethya.Entities.SkilledEntity
         * @memberof Xethya.Entities.SkilledEntity
         * @param   {string}                   skillName    The skill's name.
         * @return  {Xethya.Entities.Skill}                 The requested skill.
         */
        getSkillByName: function (skillName) {
            return Bridge.Linq.Enumerable.from(this.getSkills()).first(function (s) {
                return s.getName() === skillName;
            });
        },
        /**
         * Executes a given action, by its skill name.
         This is a proxy method to call the Use() method
         of the Skill class.
         *
         * @instance
         * @public
         * @this Xethya.Entities.SkilledEntity
         * @memberof Xethya.Entities.SkilledEntity
         * @param   {string}                                 skillName    The skill to invoke.
         * @return  {Xethya.DiceRolling.SkillThrowResult}                 The outcome of the skill's invocation.
         */
        useSkill: function (skillName) {
            return this.getSkillByName(skillName).$use();
        }
    });
    
    /**
     * A skill is an ability performable by any entity that derives
     from SkilledEntity. It has the same base components of an
     attribute (thus, it can be altered with modifiers). Also, 
     a skill can be affected by attributes: for instance, a "Punch"
     skill will be affected by a "Strength" attribute and an "Agility"
     attribute.
     *
     * @public
     * @class Xethya.Entities.Skill
     * @augments Xethya.Entities.Attribute
     * @implements  Xethya.Common.Interfaces.IWithAttributes
     * @implements  Xethya.Common.Interfaces.IModifierSource
     */
    Bridge.define('Xethya.Entities.Skill', {
        inherits: [Xethya.Entities.Attribute,Xethya.Common.Interfaces.IWithAttributes,Xethya.Common.Interfaces.IModifierSource],
        config: {
            properties: {
                /**
                 * Contains the required attributes for the skill.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Skill
                 * @memberof Xethya.Entities.Skill
                 * @function getAttributes
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Contains the required attributes for the skill.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Skill
                 * @memberof Xethya.Entities.Skill
                 * @function setAttributes
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Attributes: null
            }
        },
        /**
         * Creates a new skill with a given name, with a default
         value range from 0 to the 32-bit limit (due to Attribute
         base constructor).
         *
         * @instance
         * @public
         * @this Xethya.Entities.Skill
         * @memberof Xethya.Entities.Skill
         * @param   {string}    name    The skill's name.
         * @return  {void}
         */
        constructor: function (name) {
            Xethya.Entities.Attribute.prototype.$constructor.call(this, name);
    
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
        },
        /**
         * Creates a new skill with a given name and minimum-maximum
         allowed values.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Skill
         * @memberof Xethya.Entities.Skill
         * @param   {string}                         name          The skill's name.
         * @param   {Xethya.Common.ValueInterval}    valueRange    An instance of ValueInterval containing the skill's value range.
         * @return  {void}
         */
        constructor$1: function (name, valueRange) {
            Xethya.Entities.Attribute.prototype.constructor$1.call(this, name, valueRange);
    
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
        },
        /**
         * Gets an associated attribute by its name.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Skill
         * @memberof Xethya.Entities.Skill
         * @param   {string}                       attributeName    The attribute's name.
         * @return  {Xethya.Entities.Attribute}                     The requested attribute.
         */
        getAttributeByName: function (attributeName) {
            return Bridge.Linq.Enumerable.from(this.getAttributes()).first(function (a) {
                return a.getName() === attributeName;
            });
        },
        /**
         * Invokes the usage of the skill. This will roll a Skill throw,
         and calculate the outcome of the skill's execution. If the
         skill fails to be used, the FailureRoll property will contain
         data regarding the severity of the failure.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Skill
         * @memberof Xethya.Entities.Skill
         * @return  {Xethya.DiceRolling.SkillThrowResult}        The outcome of the skill's execution, with a SkillThrowResult instance.
         */
        $use: function () {
            var $t;
            var st = new Xethya.DiceRolling.SkillThrow(this);
            var str = st.roll$2();
            $t = Bridge.getEnumerator(this.getAttributes());
            while ($t.moveNext()) {
                var attribute = $t.getCurrent();
                str.setSkillAttributeModifiersValue(str.getSkillAttributeModifiersValue()+attribute.getModifierSum());
            }
            if (str.getThrowType() === Xethya.DiceRolling.DiceThrowType.failure) {
                str.setFailureRoll(new Xethya.DiceRolling.ChanceThrow("constructor").roll$1());
            }
            else  {
                str.setFailureRoll(null);
            }
            return str;
        }
    });
    
    /**
     * A stat is a calculation derived from the value of one or
     multiple attributes. It works just like a skill, but it
     has not an independent Use() method. It is always part of
     an ability check.
     *
     * @public
     * @class Xethya.Entities.Stat
     * @augments Xethya.Entities.Attribute
     * @implements  Xethya.Common.Interfaces.IWithAttributes
     * @implements  Xethya.Common.Interfaces.IModifierSource
     * @implements  Xethya.Common.Interfaces.IWithStats
     */
    Bridge.define('Xethya.Entities.Stat', {
        inherits: [Xethya.Entities.Attribute,Xethya.Common.Interfaces.IWithAttributes,Xethya.Common.Interfaces.IModifierSource,Xethya.Common.Interfaces.IWithStats],
        config: {
            properties: {
                /**
                 * Allows the implementing object to hold stats.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Stat
                 * @memberof Xethya.Entities.Stat
                 * @function getStats
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Allows the implementing object to hold stats.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Stat
                 * @memberof Xethya.Entities.Stat
                 * @function setStats
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Stats: null,
                /**
                 * Contains a reference to the function that computes the value
                 of the stat, based on attributes and other stats.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Stat
                 * @memberof Xethya.Entities.Stat
                 * @function getCalculationCallback
                 * @return  {System.Func}
                 */
                /**
                 * Contains a reference to the function that computes the value
                 of the stat, based on attributes and other stats.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Stat
                 * @memberof Xethya.Entities.Stat
                 * @function setCalculationCallback
                 * @param   {System.Func}    value
                 * @return  {void}
                 */
                CalculationCallback: null,
                /**
                 * Contains the required attributes for the stat.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Stat
                 * @memberof Xethya.Entities.Stat
                 * @function getAttributes
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Contains the required attributes for the stat.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.Stat
                 * @memberof Xethya.Entities.Stat
                 * @function setAttributes
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Attributes: null
            }
        },
        /**
         * Instantiates a new stat, with a given name.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Stat
         * @memberof Xethya.Entities.Stat
         * @param   {string}    name    The new stat's name.
         * @return  {void}
         */
        constructor: function (name) {
            Xethya.Entities.Attribute.prototype.$constructor.call(this, name);
    
            this.setStats(new Bridge.List$1(Xethya.Entities.Stat)());
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
        },
        /**
         * Instantiates a new stat, with a given name and a calculation callback.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Stat
         * @memberof Xethya.Entities.Stat
         * @param   {string}         name                   The new stat's name.
         * @param   {System.Func}    calculationCallback    The function callback to be used when getting the value of the stat.
         * @return  {void}
         */
        constructor$1: function (name, calculationCallback) {
            Xethya.Entities.Attribute.prototype.$constructor.call(this, name);
    
            this.setStats(new Bridge.List$1(Xethya.Entities.Stat)());
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
            this.setCalculationCallback(calculationCallback);
        },
        /**
         * Returns the result of the calculation callback.
         *
         * @instance
         * @public
         * @override
         * @this Xethya.Entities.Stat
         * @memberof Xethya.Entities.Stat
         * @function getValue
         * @return  {number}
         */
        /**
         * Returns the result of the calculation callback.
         *
         * @instance
         * @function setValue
         */
        getValue: function () {
            if (!Bridge.hasValue(this.getCalculationCallback())) {
                throw new Bridge.InvalidOperationException("A calculation callback must be defined for the " + this.getName() + " stat.");
            }
            return this.getCalculationCallback().call(null, this.getAttributes(), this.getStats());
        },
        /**
         * Selects a stat from the list by its
         name and returns it.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Stat
         * @memberof Xethya.Entities.Stat
         * @param   {string}                  statName    The stat's name.
         * @return  {Xethya.Entities.Stat}                Stat
         */
        getStatByName: function (statName) {
            return Bridge.Linq.Enumerable.from(this.getStats()).single(function (s) {
                return s.getName() === statName;
            });
        },
        /**
         * Nullifies the base modifier code inherited from Attribute,
         since a Stat has no base modifier.
         *
         * @instance
         * @protected
         * @override
         * @this Xethya.Entities.Stat
         * @memberof Xethya.Entities.Stat
         * @return  {void}
         */
        _RefreshBaseModifier: function () {
    
        },
        /**
         * Gets an associated attribute by its name.
         *
         * @instance
         * @public
         * @this Xethya.Entities.Stat
         * @memberof Xethya.Entities.Stat
         * @param   {string}                       attributeName    The attribute's name.
         * @return  {Xethya.Entities.Attribute}                     The requested attribute.
         */
        getAttributeByName: function (attributeName) {
            return Bridge.Linq.Enumerable.from(this.getAttributes()).first(function (a) {
                return a.getName() === attributeName;
            });
        }
    });
    
    /**
     * A living entity is, basically, any living creature. It derives from
     the SkilledEntity class, thus it has attributes and skills. It includes
     some basic attributes declared, based on the 5th SRD specs.
     A living entity must belong to an EntityRace class. This EntityRace
     defines aspects of the entity that adjust its attributes, skills and
     stats accordingly.
     *
     * @abstract
     * @public
     * @class Xethya.Entities.LivingEntity
     * @augments Xethya.Entities.SkilledEntity
     * @implements  Xethya.Common.Interfaces.IWithStats
     * @see {@link http://dnd5e.info/}
     */
    Bridge.define('Xethya.Entities.LivingEntity', {
        inherits: [Xethya.Entities.SkilledEntity,Xethya.Common.Interfaces.IWithStats],
        config: {
            properties: {
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.LivingEntity
                 * @memberof Xethya.Entities.LivingEntity
                 * @function getAge
                 * @return  {number}
                 */
                /**
                 * @instance
                 * @public
                 * @this Xethya.Entities.LivingEntity
                 * @memberof Xethya.Entities.LivingEntity
                 * @function setAge
                 * @param   {number}    value
                 * @return  {void}
                 */
                Age: 0,
                /**
                 * Allows the implementing object to hold stats.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.LivingEntity
                 * @memberof Xethya.Entities.LivingEntity
                 * @function getStats
                 * @return  {Bridge.List$1}
                 */
                /**
                 * Allows the implementing object to hold stats.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.LivingEntity
                 * @memberof Xethya.Entities.LivingEntity
                 * @function setStats
                 * @param   {Bridge.List$1}    value
                 * @return  {void}
                 */
                Stats: null,
                /**
                 * Defines the race of this living entity.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.LivingEntity
                 * @memberof Xethya.Entities.LivingEntity
                 * @function getRace
                 * @return  {Xethya.Entities.EntityRace}
                 */
                /**
                 * Defines the race of this living entity.
                 *
                 * @instance
                 * @public
                 * @this Xethya.Entities.LivingEntity
                 * @memberof Xethya.Entities.LivingEntity
                 * @function setRace
                 * @param   {Xethya.Entities.EntityRace}    value
                 * @return  {void}
                 */
                Race: null
            }
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @param   {Xethya.Entities.EntityRace}    race
         * @return  {void}
         */
        constructor: function (race) {
            Xethya.Entities.SkilledEntity.prototype.$constructor.call(this);
    
            this.setIsAlive(true);
            this.setStats(new Bridge.List$1(Xethya.Entities.Stat)());
            this.setRace(race);
    
            this._RegisterLivingEntityAttributes();
            this._RegisterLivingEntitySkills();
            this._RegisterLivingEntityStats();
    
            this._ApplyRacialTraits();
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @function getHasDeityTraits
         * @return  {boolean}
         */
        /**
         * @instance
         * @function setHasDeityTraits
         */
        getHasDeityTraits: function () {
            return Bridge.Linq.Enumerable.from(this.getAttributes()).any($_.Xethya.Entities.LivingEntity.f1);
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @function getIsPureDeity
         * @return  {boolean}
         */
        /**
         * @instance
         * @function setIsPureDeity
         */
        getIsPureDeity: function () {
            return Bridge.Linq.Enumerable.from(this.getAttributes()).all($_.Xethya.Entities.LivingEntity.f1);
        },
        /**
         * @instance
         * @public
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @function getIsBeyondLifeExpectancy
         * @return  {boolean}
         */
        /**
         * @instance
         * @function setIsBeyondLifeExpectancy
         */
        getIsBeyondLifeExpectancy: function () {
            return !(new Xethya.Common.ValueInterval(1, this.getRace().getLifeExpectancy()).valueInRange(this.getAge()));
        },
        /**
         * Selects a stat from the list by its
         name and returns it.
         *
         * @instance
         * @public
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @param   {string}                  statName    The stat's name.
         * @return  {Xethya.Entities.Stat}                Stat
         */
        getStatByName: function (statName) {
            return Bridge.Linq.Enumerable.from(this.getStats()).single(function (s) {
                return s.getName() === statName;
            });
        },
        /**
         * @instance
         * @protected
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @return  {void}
         */
        _RegisterLivingEntityAttributes: function () {
            this.getAttributes().addRange([Bridge.get(Xethya.Common.Gamebook.AttributeDefinitions).getStrength(), Bridge.get(Xethya.Common.Gamebook.AttributeDefinitions).getDexterity(), Bridge.get(Xethya.Common.Gamebook.AttributeDefinitions).getConstitution(), Bridge.get(Xethya.Common.Gamebook.AttributeDefinitions).getIntelligence(), Bridge.get(Xethya.Common.Gamebook.AttributeDefinitions).getWisdom(), Bridge.get(Xethya.Common.Gamebook.AttributeDefinitions).getCharisma()]);
        },
        /**
         * @instance
         * @protected
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @return  {void}
         */
        _RegisterLivingEntitySkills: function () {
            var STR = this.getAttributeByName(Bridge.get(Xethya.Common.Gamebook.AttributeNames).Strength), DEX = this.getAttributeByName(Bridge.get(Xethya.Common.Gamebook.AttributeNames).Dexterity), INT = this.getAttributeByName(Bridge.get(Xethya.Common.Gamebook.AttributeNames).Intelligence), WIS = this.getAttributeByName(Bridge.get(Xethya.Common.Gamebook.AttributeNames).Wisdom), CHA = this.getAttributeByName(Bridge.get(Xethya.Common.Gamebook.AttributeNames).Charisma);
    
            this.getSkills().addRange([Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).athletics(STR), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).acrobatics(DEX), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).sleightOfHand(DEX), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).stealth(DEX), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).arcana(INT), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).history(INT), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).investigation(INT), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).nature(INT), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).religion(INT), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).animalHandling(WIS), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).insight(WIS), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).medicine(WIS), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).perception(WIS), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).survival(WIS), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).deception(CHA), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).intimidation(CHA), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).performance(CHA), Bridge.get(Xethya.Common.Gamebook.SkillDefinitions).persuasion(CHA)]);
        },
        /**
         * @instance
         * @protected
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @return  {void}
         */
        _RegisterLivingEntityStats: function () {
            this.getStats().addRange([Bridge.get(Xethya.Common.Gamebook.StatDefinitions).carryingCapacity(this.getAttributeByName(Bridge.get(Xethya.Common.Gamebook.AttributeNames).Strength)), Bridge.get(Xethya.Common.Gamebook.StatDefinitions).hitPoints(this.getAttributeByName(Bridge.get(Xethya.Common.Gamebook.AttributeNames).Constitution))]);
            this.getStats().addRange([Bridge.get(Xethya.Common.Gamebook.StatDefinitions).objectHandlingCapacity(this.getStatByName(Bridge.get(Xethya.Common.Gamebook.StatNames).CarryingCapacity))]);
        },
        /**
         * @instance
         * @protected
         * @this Xethya.Entities.LivingEntity
         * @memberof Xethya.Entities.LivingEntity
         * @return  {void}
         */
        _ApplyRacialTraits: function () {
            var $t, $t1, $t2;
            $t = Bridge.getEnumerator(this.getRace().getAttributes());
            while ($t.moveNext()) {
                var attribute = $t.getCurrent();
                var raceTrait = new Xethya.Entities.Modifier("constructor$1", attribute.getName() + "RaceTrait");
                raceTrait.setValue(Bridge.Convert.toInt32(Xethya.Entities.AttributeExtensions.byName(this.getRace().getAttributes(), attribute.getName()).getValue()));
                Xethya.Entities.AttributeExtensions.byName(this.getAttributes(), attribute.getName()).getModifiers().add(raceTrait);
            }
    
            $t1 = Bridge.getEnumerator(this.getRace().getSkills());
            while ($t1.moveNext()) {
                var skill = $t1.getCurrent();
                var raceTrait1 = new Xethya.Entities.Modifier("constructor$1", skill.getName() + "RaceTrait");
                raceTrait1.setValue(Bridge.Convert.toInt32(Xethya.Entities.SkillExtensions.byName(this.getRace().getSkills(), skill.getName()).getValue()));
                Xethya.Entities.SkillExtensions.byName(this.getSkills(), skill.getName()).getModifiers().add(raceTrait1);
            }
    
            $t2 = Bridge.getEnumerator(this.getRace().getStats());
            while ($t2.moveNext()) {
                var stat = $t2.getCurrent();
                var raceTrait2 = new Xethya.Entities.Modifier("constructor$1", stat.getName() + "RaceTrait");
                raceTrait2.setValue(Bridge.Convert.toInt32(Xethya.Entities.StatExtensions.byName(this.getRace().getStats(), stat.getName()).getModifiers().getItem(1)));
                Xethya.Entities.StatExtensions.byName(this.getStats(), stat.getName()).getModifiers().add(raceTrait2);
            }
        }
    });
    
    Bridge.ns("Xethya.Entities.LivingEntity", $_)
    
    Bridge.apply($_.Xethya.Entities.LivingEntity, {
        f1: function (a) {
            return a.getValue() >= 27;
        }
    });
    
    
    
    Bridge.init();
})(this);
