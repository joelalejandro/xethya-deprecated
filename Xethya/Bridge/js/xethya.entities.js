(function (globals) {
    "use strict";

    /** @namespace Xethya.Entities */
    
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
    
    Bridge.define('Xethya.Entities.Modifier', {
        config: {
            properties: {
                ID: null,
                Value: 0,
                Source: null
            }
        }
    });
    
    Bridge.define('Xethya.Entities.Attribute', {
        inherits: [Xethya.Common.ValueInterval,Xethya.Common.Interfaces.INameable,Xethya.Common.Interfaces.IWithModifiers],
        _Value: Bridge.Decimal(0.0),
        config: {
            properties: {
                ID: null,
                Name: null,
                Modifiers: null
            }
        },
        constructor: function (name) {
            Xethya.Common.ValueInterval.prototype.$constructor.call(this, 0, 100);
    
            this.setID(Bridge.get(Xethya.Common.Guid).generate());
            this.setName(name);
            this.setModifiers(new Bridge.List$1(Xethya.Entities.Modifier)());
        },
        constructor$1: function (name, valueRange) {
            Xethya.Common.ValueInterval.prototype.$constructor.call(this, valueRange.getLowerBound(), valueRange.getUpperBound());
    
            this.setID(Bridge.get(Xethya.Common.Guid).generate());
            this.setName(name);
            this.setModifiers(new Bridge.List$1(Xethya.Entities.Modifier)());
        },
        getModifierSum: function () {
            return Bridge.Linq.Enumerable.from(this.getModifiers()).sum($_.Xethya.Entities.Attribute.f1);
        },
        getValue: function () {
            return this._Value;
        },
        setValue: function (value) {
            if (this.valueInRange(value)) {
                this._Value = value;
                this._RefreshBaseModifier();
            }
            else  {
                throw new Bridge.ArgumentOutOfRangeException("Value", "Attribute " + this.getName() + " has a value out of range " + Xethya.Common.ValueInterval.prototype.toString.call(this));
            }
        },
        getComputedValue: function () {
            return this.getValue().add(Bridge.Decimal(this.getModifierSum()));
        },
        _RefreshBaseModifier: function () {
            var baseModifier = new Xethya.Entities.Modifier();
            baseModifier.setSource(null);
            baseModifier.setValue(Bridge.Convert.toInt32(this.getValue().div(Bridge.Decimal(15)).floor()));
            if (this.getModifiers().getCount() === 0) {
                this.getModifiers().add(baseModifier);
            }
            else  {
                this.getModifiers().setItem(0, baseModifier);
            }
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
     * @implements  Xethya.Common.Interfaces.IWithModifiers
     */
    Bridge.define('Xethya.Entities.Entity', {
        inherits: [Xethya.Common.Interfaces.INameable,Xethya.Common.Interfaces.IWithAttributes,Xethya.Common.Interfaces.IWithModifiers],
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
                Attributes: null,
                Modifiers: null
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
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
            this.setModifiers(new Bridge.List$1(Xethya.Entities.Modifier)());
    
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
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
            this.setModifiers(new Bridge.List$1(Xethya.Entities.Modifier)());
    
            this._RegisterInContainerIfNeeded();
        },
        getModifierSum: function () {
            return Bridge.Linq.Enumerable.from(this.getModifiers()).sum($_.Xethya.Entities.Entity.f1);
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
        getAttributeByName: function (attributeName) {
            return Bridge.Linq.Enumerable.from(this.getAttributes()).first(function (a) {
                return a.getName() === attributeName;
            });
        }
    });
    
    Bridge.ns("Xethya.Entities.Entity", $_)
    
    Bridge.apply($_.Xethya.Entities.Entity, {
        f1: function (m) {
            return m.getValue();
        }
    });
    
    Bridge.define('Xethya.Entities.Skill', {
        inherits: [Xethya.Entities.Attribute,Xethya.Common.Interfaces.IWithAttributes,Xethya.Common.Interfaces.IModifierSource],
        config: {
            properties: {
                Attributes: null
            }
        },
        constructor: function (name) {
            Xethya.Entities.Attribute.prototype.$constructor.call(this, name);
    
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
        },
        constructor$1: function (name, valueRange) {
            Xethya.Entities.Attribute.prototype.constructor$1.call(this, name, valueRange);
    
            this.setAttributes(new Bridge.List$1(Xethya.Entities.Attribute)());
        },
        getAttributeByName: function (attributeName) {
            return Bridge.Linq.Enumerable.from(this.getAttributes()).first(function (a) {
                return a.getName() === attributeName;
            });
        },
        $use: function () {
            var $t;
            var st = new Xethya.DiceRolling.SkillThrow(Bridge.Convert.toInt32(this.getValue()));
            var str = st.roll$2();
            str.getModifiers().addRange(this.getModifiers());
            $t = Bridge.getEnumerator(this.getAttributes());
            while ($t.moveNext()) {
                var attribute = $t.getCurrent();
                var modifier = new Xethya.Entities.Modifier();
                modifier.setSource("attribute@" + attribute.getID());
                modifier.setValue(attribute.getModifierSum());
                str.getModifiers().add(modifier);
            }
            if (str.getThrowType() === Xethya.DiceRolling.DiceThrowType.failure) {
                str.setFailureRoll(new Xethya.DiceRolling.ChanceThrow("constructor").roll$1());
            }
            return str;
        }
    });
    
    Bridge.define('Xethya.Entities.SkilledEntity', {
        inherits: [Xethya.Entities.Entity,Xethya.Common.Interfaces.IWithSkills],
        config: {
            properties: {
                Skills: null
            }
        },
        constructor: function () {
            Xethya.Entities.Entity.prototype.$constructor.call(this);
    
            this.setSkills(new Bridge.List$1(Xethya.Entities.Skill)());
        },
        constructor$1: function (name) {
            Xethya.Entities.Entity.prototype.constructor$1.call(this, name);
    
            this.setSkills(new Bridge.List$1(Xethya.Entities.Skill)());
        },
        getSkillByName: function (skillName) {
            return Bridge.Linq.Enumerable.from(this.getSkills()).first(function (s) {
                return s.getName() === skillName;
            });
        },
        useSkill: function (skillName) {
            return this.getSkillByName(skillName).$use();
        }
    });
    
    Bridge.init();
})(this);
