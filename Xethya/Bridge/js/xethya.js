﻿(function (globals) {
    "use strict";

    /** @namespace Xethya */
    
    /**
     * @public
     * @class Xethya.App
     */
    Bridge.define('Xethya.App', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            /**
             * @static
             * @public
             * @this Xethya.App
             * @memberof Xethya.App
             * @return  {void}
             */
            main: function () {
                var $t, $t1;
                Bridge.global["__XETHYA_DEBUG__"] = true;
                Bridge.global["__XETHYA_VERSION__"] = "0.1.0";
                if (Bridge.global["__XETHYA_DEBUG__"]) {
                    console.info("Xethya Engine " + Bridge.global["__XETHYA_VERSION__"]);
                    console.warn("WARNING!", "\tDebug mode is on. Internal methods will return private values on console.");
                }
    
                console.groupCollapsed("Xethya Test Suite results here!");
    
                var mt = new Xethya.Common.Randomness.MersenneTwister();
                try {
                    console.groupCollapsed("MersenneTwister test");
                    console.info("This test shows the generation of 'better' random numbers.");
                    console.log("Random Integer: " + mt.generateRandomInteger().toString());
                    console.log("Random 0-1: " + Bridge.Double.format(mt.generateRandom(), 'G'));
                    console.groupEnd();
                }
                finally {
                    if (Bridge.hasValue(mt)) {
                        mt.dispose();
                    }
                }
    
                var coin = new Xethya.DiceRolling.CoinFlip();
                console.groupCollapsed("CoinFlip test");
                console.info("This test shows a simplified dice roll algorithm to resolve boolean questions.");
                console.log("1: Head, 2: Tails");
                console.log("Result: " + coin.roll());
                console.groupEnd();
    
                var dice = new Xethya.DiceRolling.Dice(6);
                console.groupCollapsed("Dice(6) test");
                console.info("This test rolls a d6 and shows the rolled number.");
                console.log("Result: " + dice.roll());
                console.groupEnd();
    
                var dices = new Xethya.DiceRolling.DiceThrow(5, 20);
                console.groupCollapsed("Dice(20), five rolls");
                var dtr = dices.roll();
                console.info("This test rolls five d20 dices.");
                console.log("Numbers: " + dtr.getRolls().join(","));
                console.log("Sum: " + dtr.getRollSum());
                console.groupEnd();
    
                var ctr = new Xethya.DiceRolling.ChanceThrow("constructor").roll$1();
                console.groupCollapsed("ChanceThrow test");
                console.info("This test shows the success rate of a chance throw.");
                console.log(ctr);
                console.log("Roll sum: " + ctr.getRollSum());
                console.log("Is failure? " + Bridge.Convert.toString(ctr.getThrowType() === Xethya.DiceRolling.DiceThrowType.Failure));
                console.log("Is success? " + Bridge.Convert.toString(ctr.getThrowType() === Xethya.DiceRolling.DiceThrowType.Normal));
                console.log("Is critical success? " + Bridge.Convert.toString(ctr.getThrowType() === Xethya.DiceRolling.DiceThrowType.Critical));
                console.groupEnd();
    
                var dwarf = new Xethya.Player(Xethya.Common.Gamebook.RaceDefinitions.getDwarf());
                dwarf.setName("Joel");
                Xethya.Entities.AttributeExtensions.rollAllValues(dwarf.getAttributes());
                console.groupCollapsed("Player test");
                console.info("This test shows a fully-featured Player entity.");
                console.log(dwarf);
                $t = Bridge.getEnumerator(dwarf.getAttributes());
                while ($t.moveNext()) {
                    var attribute = $t.getCurrent();
                    console.log(attribute.getName() + ": " + attribute);
                }
                $t1 = Bridge.getEnumerator(dwarf.getStats());
                while ($t1.moveNext()) {
                    var stat = $t1.getCurrent();
                    console.log(stat.getName() + ": " + stat);
                }
                console.groupEnd();
    
                console.groupEnd();
            }
        }
    });
    
    /**
     * @public
     * @class Xethya.Player
     * @augments Xethya.Entities.LivingEntity
     */
    Bridge.define('Xethya.Player', {
        inherits: [Xethya.Entities.LivingEntity],
        /**
         * @instance
         * @public
         * @this Xethya.Player
         * @memberof Xethya.Player
         * @param   {Xethya.Entities.EntityRace}    race
         * @return  {void}
         */
        constructor: function (race) {
            Xethya.Entities.LivingEntity.prototype.$constructor.call(this, race);
    
        }
    });
    
    Bridge.init();
})(this);
