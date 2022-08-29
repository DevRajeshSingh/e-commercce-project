import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import style from "./../../styles/Account.module.css";
import AccountSetting from "../../components/AccountPageComponent/AccountSetting";
import Coupon from "../../components/AccountPageComponent/Coupon";
import Notification from "../../components/AccountPageComponent/Notification";

const Account = () => {
  const router = useRouter();
  const { page } = router.query;
  return (
    <>
      <div className={style.account_container}>
        <ul className={style.account_navbar}>
          <li>
            <Link href="/account/setting">Profile</Link>
          </li> 
          <hr />
          <li>
            <Link href="/account/coupons">Coupons</Link>
          </li>
          <hr />
          <li>
            <Link href="/account/notifications">Notifications</Link>
          </li>
        </ul>
        {page === "setting" && <AccountSetting />}
        {page === "coupons" && <Coupon/>}  
        {page === "notifications" && <Notification/>}
      </div>
    </>
  );
};

export default Account;
