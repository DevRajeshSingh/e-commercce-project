import React from "react";
import Style from "./../../styles/Coupon.module.css";

const couponcode = [
  {
    id: 1,
    title: "Coupon 1",
    description: "Coupon 1 description",
    code: "COUPON1"
  },
  {
    id: 2,
    title: "Coupon 2",
    description: "Coupon 2 description",
    code: "COUPON2",
  },
  {
    id: 3,
    title: "Coupon 3",
    description:
      "Coupon 3 description lnifbib onvnon oonnv oiweo oinv onwv onvonoivoin nvoi oinne",
    code: "COUPON3",
  },
];

const Coupon = (code) => {
  return (
    <div className={Style.Coupon_container}>
      {couponcode.map((coupon) => (
        <div key={coupon.id} className={Style.Coupon_item}>
          <div className={Style.Coupon_card}>
            {coupon.code}
            <small
              onClick={() => {
                navigator.clipboard.writeText(coupon.code);
                alert("Code copied to clipboard");
              }}
            >
              click here to copy
            </small>
          </div>
          <div className={Style.Coupon_info}>
            <div className={Style.coupon_item_info_name}>
              <h3>{coupon.title}</h3>
            </div>
            <div className={Style.coupon_item_info_description}>
              <p>{coupon.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coupon;
