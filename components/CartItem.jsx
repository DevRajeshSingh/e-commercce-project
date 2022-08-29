import React from "react";
import Image from "next/image";
import style from "./../styles/Cart.module.css";

const CartItem = ({ product }) => {
  const handleQuantityChange = (e , product) => {
    console.log(e.target.value,product);
  }
  return (
    <div className={style.CartItem}>
      <div className={style.CartItem_image}>
        <Image width={400} height={300} src={product.image} alt="product" />
      </div>
      <div className={style.CartItem_info}>
        <div className={style.CartItem_info_name}>
          <h3>{product.name}</h3>
        </div>
        <div className={style.CartItem_info_description}>
          <p>{product.description}</p>
        </div>
        <div className={style.CartItem_info_price}>
          <small>&#8377;{(product.originalPrice)*(product.quantity)}</small>
          <h3>&#8377;{(product.discountPrice)*(product.quantity)} &nbsp; <span className={style.discount_percent}>{Math.round((product.discountPrice)/(product.originalPrice)*100)}% off</span> </h3>
        </div>
        <div className={style.CartItem_quantity}>
          <span className={style.input_number_decrement}>-</span>
          <input
            className={style.input_number}
            type="text"
            value={product.quantity}
            min="0"
            max="10"
            onChange={(e) => {
              handleQuantityChange(e, product.id);
            }}
          />
          <span className={style.input_number_increment}>+</span>
        </div>

        <div className={style.cartButtons} >
          <button className={style.CartItem_remove}>Remove</button>
          <button className={`button ${style.buyNow}`}>Buy Now</button>
        </div>
      </div>
    </div>
  ); 
};

export default CartItem;
