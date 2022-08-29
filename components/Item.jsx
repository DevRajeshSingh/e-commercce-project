import React from "react";
import style from "./../styles/Item.module.css";
import Image from "next/image";
const Item = ({id}) => {
  console.log(id);
  return (
    <>
      <div className={style.product_card}>
        <div className={style.image_container}>
          <div className={`${style.cover_image} ${style.product_image}`}>
            <Image
              className={style.img_fluid}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.22NHOGduNlgOgLOnTosV3gHaHW%26pid%3DApi&f=1"
              alt=""
              height={300}
              width={300}
            />
          </div>
          <div className={style.more_image_container}>
            <div className={`${style.more_image} ${style.product_image}`}>
              <Image
                className={style.img_fluid}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.nl%2Fp%2F600x600%2Fk%2FRazer_Kraken___Kitty_Edition___Quartz_gaming_headset%40%40kh-r59_31.jpg&f=1&nofb=1"
                alt=""
                height={300}
                width={300}
              />
            </div>
            <div className={`${style.more_image} ${style.product_image}`}>
              <Image
                className={style.img_fluid}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F1144%2F1146947_6.jpg&f=1&nofb=1"
                alt=""
                height={300}
                width={300}
              />
            </div>
            <div className={`${style.more_image} ${style.product_image}`}>
              <Image
                className={style.img_fluid}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komplett.no%2Fimg%2Fp%2F870%2F1146947_4.jpg&f=1&nofb=1"
                alt=""
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
        <div className={style.product_info}>
          <a className={style.free_shipping}>Free shipping</a>
          <h3 className={style.product_name}>
            Razer Kraken Kitty Edt Gamming Headset Quartz
          </h3>
          <p className={style.regular_price}>&#8377; 1599</p>
          <p className={style.discount_price}> &#8377; 799</p>
          <p className={style.offer_info}>
            Descriptio Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quae libero id eaque dolorem tempore ipsam itaque, natus, iusto, beatae numquam quaerat. Quae, at consectetur!
          </p>
          <a className={style.add_to_cart}>Buy Now</a>
          <div className={style.stock}>
            <div className={style.stock_status}></div>
            <p className={style.stock_info}>50+ pcs. in stock.</p>
          </div>
          <div className={style.buttons}>
            <a className={style.button}>Add to cart</a>
            <a className={style.button}>Add to wishlist</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
