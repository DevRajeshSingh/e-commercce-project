import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [searchItem, setsearchItem] = useState("");
  useEffect(() => {
    const openMenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu");
    const menuWrapper = document.querySelector(".menu-wrapper");
    openMenu.addEventListener("click", function () {
      menuWrapper.classList.add("offcanvas");
    });

    closeMenu.addEventListener("click", function () {
      menuWrapper.classList.remove("offcanvas");
    });

    return () => {
      openMenu.removeEventListener("click", function () {
        menuWrapper.classList.add("offcanvas");
      }),
        closeMenu.removeEventListener("click", function () {
          menuWrapper.classList.remove("offcanvas");
        }),
        menuWrapper.classList.remove("offcanvas");
    };
  }, []);

  const handleMenuClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <span className="open-menu">
            <svg
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>
            <Link href="/">
              <a className="brand">
                <Image
                  src="/../public/violet-main-logo.png"
                  alt=""
                  width={100}
                  height={30}
                  priority={true}
                />
              </a>
            </Link>
          </span>

          <div className="searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              placeholder="Search"
              value={searchItem}
              autoComplete={"off"}
              onChange={(e) => setsearchItem(e.target.value)}
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#666666"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </button>
          </div>

          <div className="menu-wrapper">
            <ul className="menu">
              <li className="menu-block">
                <span>
                  <a className="brand">
                    <Image
                      src="/../public/violet-main-logo.png"
                      alt=""
                      width={100}
                      height={30}
                    />
                  </a>
                </span>
                <span className="close-menu">
                  <svg
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
                    />
                  </svg>
                </span>
              </li>
              <li className="menu-item">
                <Link href="/">
                  <a className="menu-link">Home</a>
                </Link>
              </li>
              <hr />

              <li
                className="menu-item has-collapsible"
                onClick={handleMenuClick}
              >
                <a>
                  <span>Categories &#8194; &#62;</span>
                </a>
                <ul className="menu-child">
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Lighting</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Fans & Coolers</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Wires & Cables</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Protection Devices</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Switches & Sockets</a>
                    </li>
                  </Link>
                  <Link href="/categories/">
                    <li className="menu-child-item">
                      <a>View All Categories</a>
                    </li>
                  </Link>
                </ul>
              </li>

              <li
                className="menu-item has-collapsible"
                onClick={handleMenuClick}
              >
                <a>
                  <span>Brands &#8194; &#62;</span>
                </a>
                <ul className="menu-child">
                  <Link href="/brands/havells">
                    <li className="menu-child-item">
                      <a>Havells</a>
                    </li>
                  </Link>
                  <Link href="/brands/anchor">
                    <li className="menu-child-item">
                      <a>Anchor</a>
                    </li>
                  </Link>
                  <Link href="/brands/polycab">
                    <li className="menu-child-item">
                      <a>Polycab</a>
                    </li>
                  </Link>
                  <Link href="/brands/siemens">
                    <li className="menu-child-item">
                      <a>Siemens</a>
                    </li>
                  </Link>
                  <Link href="/brands/universal-electronics">
                    <li className="menu-child-item">
                      <a>Universal Electronics</a>
                    </li>
                  </Link>
                  <Link href="/brands/crompton">
                    <li className="menu-child-item">
                      <a>Crompton</a>
                    </li>
                  </Link>
                  <Link href="/brands/v-guard">
                    <li className="menu-child-item">
                      <a>V Guard</a>
                    </li>
                  </Link>
                  <Link href="/brands">
                    <li className="menu-child-item">
                      <a>View all Brands</a>
                    </li>
                  </Link>
                </ul>
              </li>

              <li
                className="menu-item has-collapsible"
                onClick={handleMenuClick}
              >
                <a>
                  <span>Mobiles & Tablets &#8194; &#62;</span>
                </a>
                <ul className="menu-child">
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>New 5G Phones</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Smartphone</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Featured Phone</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Tablets</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Chargers & Cable</a>
                    </li>
                  </Link>

                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a> Earphones & Headphones </a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Covers & Skins</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Phone Stand & Tripods</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>VIew all Accessories</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <li
                className="menu-item has-collapsible"
                onClick={handleMenuClick}
              >
                <a>
                  <span>Computers & Laptops &#8194; &#62;</span>
                </a>
                <ul className="menu-child">
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Gaming Laptops</a>
                    </li>
                  </Link>

                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Multi-Tasking Laptops</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Thin and light Laptops</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Budget laptops</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Chargers & Adapters</a>
                    </li>
                  </Link>

                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Graphics Cards </a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>SSD/HDD & Pendrives</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a> Laptop Bags & Sleeves</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Laptop Brands</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>View other Categories</a>
                    </li>
                  </Link>

                  {/* 
                  Laptop Accessories
                  Laptop Cooling Pads
                  Laptop Stands
                  Laptop Skins & Decals
                  Computer Accessories
                  HP Laptop 
                  Apple Laptop 
                  Dell Laptop 
                  Asus Laptop 
                  Acer Laptop 
                  Lenovo Laptop 
                  MSI Laptop 
                  Mi Laptop 
                  Avita Laptop
                  */}
                </ul>
              </li>
              <li
                className="menu-item has-collapsible"
                onClick={handleMenuClick}
              >
                <a>
                  <span>Home Appliances &#8194; &#62;</span>
                </a>
                <ul className="menu-child">
                  <Link href="/appliances/iron">
                    <li className="menu-child-item">
                      <a>Iron</a>
                    </li>
                  </Link>
                  <Link href="/appliances/doorbells">
                    <li className="menu-child-item">
                      <a>Doorbells</a>
                    </li>
                  </Link>
                  <Link href="/appliances/distribution-board">
                    <li className="menu-child-item">
                      <a>Distribution Boards</a>
                    </li>
                  </Link>

                  <Link href="/appliances/air-coolers">
                    <li className="menu-child-item">
                      <a>Air Coolers</a>
                    </li>
                  </Link>
                  <Link href="/appliances/geysers">
                    <li className="menu-child-item">
                      <a>Geysers</a>
                    </li>
                  </Link>

                  <Link href="/appliances/purifiers">
                    <li className="menu-child-item">
                      <a>Purifiers</a>
                    </li>
                  </Link>
                  <Link href="/appliances/mixer-grinder">
                    <li className="menu-child-item">
                      <a>Mixer & Grinder</a>
                    </li>
                  </Link>

                  <Link href="/appliances">
                    <li className="menu-child-item">
                      <a>View all Appliances</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <hr />
              <li
                className="menu-item has-collapsible"
                onClick={handleMenuClick}
              >
                <a>
                  <span>Electronic Accessories &#8194; &#62;</span>
                </a>
                <ul className="menu-child">
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Module & Sensors</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>PCB & Solders </a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Battery & Power Supply</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Electronic Components</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Connectors</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Switches</a>
                    </li>
                  </Link>
                  <Link href="/categories/">
                    <li className="menu-child-item">
                      <a>View All Categories</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <li
                className="menu-item has-collapsible"
                onClick={handleMenuClick}
              >
                <a>
                  <span>Electronic Sensors&#8194; &#62;</span>
                </a>
                <ul className="menu-child">
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Module & Sensors</a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>Respberry PI & Arduino </a>
                    </li>
                  </Link>
                  <Link href="/categories/item1">
                    <li className="menu-child-item">
                      <a>IC&apos;s & Microcontrollers</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <hr />

              <li className="menu-item">
                <Link href="/cart">
                  <a className="menu-link">Cart</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/wishlist">
                  <a className="menu-link">Wishlist</a>
                </Link>
              </li>

              <li className="menu-item">
                <Link href="/orders">
                  <a className="menu-link">Orders</a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/account/setting">
                  <a className="menu-link">Account</a>
                </Link>
              </li>

              <hr />
              <li className="menu-item">
                <Link href="/support/contact">
                  <a className="menu-link">Support</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-icon-con">
            <Link href="/account/setting">
              <span className="nav-cart">
                <svg
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="-5 -2 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419a1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/wishlist">
              <span className="nav-cart">
                <svg
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 22V4c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22zM6 10V4h12v14.553l-6-3.428l-6 3.428V10z"
                  />
                  <path
                    fill="currentColor"
                    d="M15.409 9.512c.361-.372.585-.888.585-1.456s-.223-1.083-.585-1.456a1.962 1.962 0 0 0-1.412-.603S13.001 5.994 12 7.026c-1.001-1.032-1.997-1.029-1.997-1.029c-.552 0-1.051.23-1.412.603c-.362.373-.585.887-.585 1.456s.223 1.084.585 1.456L12 13.203l3.409-3.691z"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/cart">
              <span className="nav-cart ">
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
