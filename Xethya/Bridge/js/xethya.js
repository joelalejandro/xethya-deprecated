(function (globals) {
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
                    console.log("Random 0-1: " + Bridge.Int.format(mt.generateRandom(), 'G'));
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
                console.log("Is failure? " + Bridge.Convert.toString(ctr.getThrowType() === Xethya.DiceRolling.DiceThrowType.failure));
                console.log("Is success? " + Bridge.Convert.toString(ctr.getThrowType() === Xethya.DiceRolling.DiceThrowType.normal));
                console.log("Is critical success? " + Bridge.Convert.toString(ctr.getThrowType() === Xethya.DiceRolling.DiceThrowType.critical));
                console.groupEnd();
    
                /* var et = new Entity("Joel");
                Console.GroupCollapsed("Entity test");
                Console.Log(et);
                Console.Log(EntityContainer.__GetContainer());
                Console.GroupEnd();*/
    
                var set = new Xethya.Entities.SkilledEntity("constructor$1", "Joel con habilidades");
                var strength = new Xethya.Entities.Attribute("constructor", "strength");
                strength.setValue(Bridge.Decimal(10));
                var punch = new Xethya.Entities.Skill("constructor", "punch");
                punch.getAttributes().add(strength);
                punch.setValue(Bridge.Decimal(5));
                set.getAttributes().add(strength);
                set.getSkills().add(punch);
    
                console.groupCollapsed("SkilledEntity test");
                console.info("This test creates a entity with attributes and skills, using a skill with a linked attribute to dice-roll an action.");
                console.log(set);
                console.log("Joel has " + set.getAttributeByName("strength").getComputedValue() + " of strength");
                console.log("Joel has " + set.getSkillByName("punch").getComputedValue() + " knowledge points in Punching");
                console.log("Joel will punch");
                console.log("Joel has punched with a score of " + set.useSkill("punch").getTotalRollValue() + " points");
                console.groupEnd();
    
                console.groupEnd();
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
