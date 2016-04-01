using Bridge;
using Bridge.Html5;
using System;
using Xethya.Common.Randomness;
using Xethya.DiceRolling;
using Xethya.Entities;

namespace Xethya
{
    public class App
    {
        [Ready]
        public static void Main()
        {
            Global.Set("__XETHYA_DEBUG__", true);
            Global.Set("__XETHYA_VERSION__", "0.1.0");
            if (Global.Get<bool>("__XETHYA_DEBUG__"))
            {
                Console.Info("Xethya Engine " + Global.Get<string>("__XETHYA_VERSION__"));
                Console.Warn("WARNING!", "\tDebug mode is on. Internal methods will return private values on console.");
            }

            Console.GroupCollapsed("Xethya Test Suite results here!");

            using (var mt = new MersenneTwister())
            {
                Console.GroupCollapsed("MersenneTwister test");
                Console.Info("This test shows the generation of 'better' random numbers.");
                Console.Log("Random Integer: " + mt.GenerateRandomInteger().ToString());
                Console.Log("Random 0-1: " + mt.GenerateRandom().ToString());
                Console.GroupEnd();
            }

            var coin = new CoinFlip();
            Console.GroupCollapsed("CoinFlip test");
            Console.Info("This test shows a simplified dice roll algorithm to resolve boolean questions.");
            Console.Log("1: Head, 2: Tails");
            Console.Log("Result: " + coin.Roll());
            Console.GroupEnd();

            var dice = new Dice(6);
            Console.GroupCollapsed("Dice(6) test");
            Console.Info("This test rolls a d6 and shows the rolled number.");
            Console.Log("Result: " + dice.Roll());
            Console.GroupEnd();

            var dices = new DiceThrow(5, 20);
            Console.GroupCollapsed("Dice(20), five rolls");
            var dtr = dices.Roll();
            Console.Info("This test rolls five d20 dices.");
            Console.Log("Numbers: " + dtr.Rolls.Join(","));
            Console.Log("Sum: " + dtr.RollSum);
            Console.GroupEnd();

            var ctr = new ChanceThrow().Roll();
            Console.GroupCollapsed("ChanceThrow test");
            Console.Info("This test shows the success rate of a chance throw.");
            Console.Log(ctr);
            Console.Log("Roll sum: " + ctr.RollSum);
            Console.Log("Is failure? " + Convert.ToString(ctr.ThrowType == DiceThrowType.Failure));
            Console.Log("Is success? " + Convert.ToString(ctr.ThrowType == DiceThrowType.Normal));
            Console.Log("Is critical success? " + Convert.ToString(ctr.ThrowType == DiceThrowType.Critical));
            Console.GroupEnd();

            /*var et = new Entity("Joel");
            Console.GroupCollapsed("Entity test");
            Console.Log(et);
            Console.Log(EntityContainer.__GetContainer());
            Console.GroupEnd();*/

            var set = new SkilledEntity("Joel con habilidades");
            var strength = new Entities.Attribute("strength");
            strength.Value = 10;
            var punch = new Skill("punch");
            punch.Attributes.Add(strength);
            punch.Value = 5;
            set.Attributes.Add(strength);
            set.Skills.Add(punch);

            Console.GroupCollapsed("SkilledEntity test");
            Console.Info("This test creates a entity with attributes and skills, using a skill with a linked attribute to dice-roll an action.");
            Console.Log(set);
            Console.Log("Joel has " + set.GetAttributeByName("strength").ComputedValue + " of strength");
            Console.Log("Joel has " + set.GetSkillByName("punch").ComputedValue + " knowledge points in Punching");
            Console.Log("Joel will punch");
            Console.Log("Joel has punched with a score of " + set.UseSkill("punch").TotalRollValue + " points");
            Console.GroupEnd();

            Console.GroupEnd();
        }
    }
}