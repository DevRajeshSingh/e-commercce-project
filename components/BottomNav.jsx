import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
useRouter
function BottomNav() {
  const router = useRouter();
  const handleCheck = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <nav className="bottom_nav_menu">
        <input
          type="radio"
          name="menu"
          id="one"
          onChange={(e) => {
            handleCheck(e);
          }}
          checked={router.pathname === "/"}
        />
        <input
          type="radio"
          name="menu"
          id="two"
          onChange={(e) => {
            handleCheck(e);
          }}
          checked={router.pathname === "/categories"}

        />
        <input
          type="radio"
          name="menu"
          id="three"
          onChange={(e) => {
            handleCheck(e);
          }}
          checked={router.pathname === "/cart"}

        />
        <input
          type="radio"
          name="menu"
          id="four"
          onChange={(e) => {
            handleCheck(e);
          }}
          checked={router.pathname === "/account/[page]"}

        />
        <div className="list">
          <div className="link-wrap">
            <label htmlFor="one">
              <i>
                <Link href="/">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3.75 5.75v7.5h8.5v-7.5m-10.5 1.5L8 1.75l6.25 5.5"
                      />
                    </svg>
                  </span>
                </Link>
              </i>
              <span>Home</span>
            </label>
            <label htmlFor="two">
              <i>
                <Link href="/categories">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
                      />
                    </svg>
                  </span>
                </Link>
              </i>
              <span>Categories</span>
            </label>
            <label htmlFor="three">
              <i>
                <Link href="/cart">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
                      />
                    </svg>
                  </span>
                </Link>
              </i>
              <span>Cart</span>
            </label>
            <label htmlFor="four">
              <i>
                <Link href="/account/setting">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="-5 -2 24 24"
                    >
                      <path
                        fill="#000000"
                        d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419a1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"
                      />
                    </svg>
                  </span>
                </Link>
              </i>
              <span>Profile</span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BottomNav;
