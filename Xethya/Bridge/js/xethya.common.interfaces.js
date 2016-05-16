(function (globals) {
    "use strict";

    /** @namespace Xethya.Common.Interfaces */
    
    /**
     * @abstract
     * @public
     * @class Xethya.Common.Interfaces.ICanUseSkills
     */
    Bridge.define('Xethya.Common.Interfaces.ICanUseSkills');
    
    /**
     * This interface injects the "Name" property to any given object.
     *
     * @abstract
     * @public
     * @class Xethya.Common.Interfaces.INameable
     */
    Bridge.define('Xethya.Common.Interfaces.INameable');
    
    /**
     * Apply this interface to any object requiring the
     usage of attributes.
     *
     * @abstract
     * @public
     * @class Xethya.Common.Interfaces.IWithAttributes
     */
    Bridge.define('Xethya.Common.Interfaces.IWithAttributes');
    
    /**
     * Apply this interface to any object that will hold
     modifiers.
     *
     * @abstract
     * @public
     * @class Xethya.Common.Interfaces.IWithModifiers
     */
    Bridge.define('Xethya.Common.Interfaces.IWithModifiers');
    
    /**
     * Apply this interface to any object that requires
     the usage of skills.
     *
     * @abstract
     * @public
     * @class Xethya.Common.Interfaces.IWithSkills
     */
    Bridge.define('Xethya.Common.Interfaces.IWithSkills');
    
    /**
     * Apply this interface to any object requiring the
     usage of stats.
     *
     * @abstract
     * @public
     * @class Xethya.Common.Interfaces.IWithStats
     */
    Bridge.define('Xethya.Common.Interfaces.IWithStats');
    
    /**
     * @abstract
     * @public
     * @class Xethya.Common.Interfaces.IModifierSource
     * @implements  Xethya.Common.Interfaces.INameable
     */
    Bridge.define('Xethya.Common.Interfaces.IModifierSource', {
        inherits: [Xethya.Common.Interfaces.INameable]
    });
    
    
    
    Bridge.init();
})(this);
