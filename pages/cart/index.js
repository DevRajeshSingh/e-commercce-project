import React from "react";
import CartItem from "../../components/CartItem";
import style from "./../../styles/Cart.module.css";
const PRODUCTS = [
  {
    id: 1,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1",
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    originalPrice: 5.99,
    discountPrice: 5.49,
    quantity: 2,
  },
  {
    id: 2,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1",
    name: "PRODUCT ITEM NUMBER 2",
    description:
      "Description for product item number 2 Description for product item number 2Description for product item number 2Description for product item number 2",
    originalPrice: 99,
    discountPrice: 22,
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1",
    name: "PRODUCT ITEM NUMBER 3",
    description: "Description for product item number 3",
    originalPrice: 52.99,
    discountPrice: 42.99,
    quantity: 1,
  },
];
const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: 50,
  },
  {
    code: "AUTUMN",
    discount: 40,
  },
  {
    code: "WINTER",
    discount: 30,
  },
];

const Cart = () => {
  return (
    <div className={style.cart_main_container}>
      <ul className={style.cart_navbar}>
        <li>Total items: 3</li>
        <hr />
        <li>Sub total: $34.99</li>
      </ul>

      <div className={style.cart_item_container}>
        {PRODUCTS.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <button className={`button ${style.checkout_button}`}>
          Check Out &nbsp;
          <svg
            style={{verticalAlign: "middle"}}
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 0 0-.4-1.34a.996.996 0 0 0-1.36.41L15.55 11H8.53L4.54 2.57a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1zM11.29 2.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3a.996.996 0 1 1-1.41-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cart;
