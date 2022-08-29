import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./../styles/ProductItem.module.css";
const ProductItem = () => {
  return (
    <div className={style.product_card}>
      <div className={style.badge}>Hot</div>
      <div className={style.product_tumb}>
        <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1"
          alt=""
          height={250}
          width={250}
        />
      </div>
      <div className={style.product_details}>
        <span className={style.product_catagory}>Women,bag</span>
        <h4>
          <a>Women leather bag</a>
        </h4>

        <div className={style.product_bottom_details}>
          <div className={style.product_price}>
            <div>
              <small className={style.original_price}>&#8377;96.00</small>
            </div>
            <div>
              &#8377;2230.99{" "}
              <small className={style.discount_percent}>50%off</small>{" "}
            </div>
          </div>
          <div className={style.product_links}>
            <Link href={`/product/item/${"5"}`}>
              <button className={style.button}>
                VIEW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
