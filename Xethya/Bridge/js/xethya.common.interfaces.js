﻿(function (globals) {
    "use strict";

    Bridge.define('Xethya.Common.Interfaces.INameable');
    
    Bridge.define('Xethya.Common.Interfaces.IWithAttributes');
    
    Bridge.define('Xethya.Common.Interfaces.IWithModifiers');
    
    Bridge.define('Xethya.Common.Interfaces.IWithSkills');
    
    Bridge.define('Xethya.Common.Interfaces.IModifierSource', {
        inherits: [Xethya.Common.Interfaces.INameable]
    });
    
    
    
    Bridge.init();
})(this);
