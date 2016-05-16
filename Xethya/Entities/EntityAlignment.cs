using Bridge;
using Bridge.Html5;

namespace Xethya.Entities
{
    public enum Moral
    {
        Good,
        Neutral,
        Evil
    }

    public enum Order
    {
        Lawful,
        Neutral,
        Chaotic
    }

    public class EntityAlignment
    {
        public Moral Moral { get; set; }
        public Order Order { get; set; }

        public EntityAlignment(Moral moral, Order order)
        {
            Moral = moral;
            Order = order;
        }

        public static EntityAlignment LawfulGood
        {
            get
            {
                return new EntityAlignment(Moral.Good, Order.Lawful);
            }
        }

        public static EntityAlignment LawfulNeutral
        {
            get
            {
                return new EntityAlignment(Moral.Neutral, Order.Lawful);
            }
        }

        public static EntityAlignment LawfulEvil
        {
            get
            {
                return new EntityAlignment(Moral.Evil, Order.Lawful);
            }
        }

        public static EntityAlignment NeutralGood
        {
            get
            {
                return new EntityAlignment(Moral.Good, Order.Neutral);
            }
        }

        public static EntityAlignment Neutral
        {
            get
            {
                return new EntityAlignment(Moral.Neutral, Order.Neutral);
            }
        }

        public static EntityAlignment NeutralEvil
        {
            get
            {
                return new EntityAlignment(Moral.Evil, Order.Neutral);
            }
        }

        public static EntityAlignment ChaoticGood
        {
            get
            {
                return new EntityAlignment(Moral.Good, Order.Chaotic);
            }
        }

        public static EntityAlignment ChaoticNeutral
        {
            get
            {
                return new EntityAlignment(Moral.Neutral, Order.Chaotic);
            }
        }

        public static EntityAlignment ChaoticEvil
        {
            get
            {
                return new EntityAlignment(Moral.Evil, Order.Chaotic);
            }
        }
    }
}
