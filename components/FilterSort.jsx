import React, { useState } from "react";
import Style from "./../styles/FilterSort.module.css";
const FilterSort = () => {
  const [isFilterOn, setisFilterOn] = useState(false);
  return (
    <>
      <div
        className={Style.collapseIcon}
        onClick={() => {
          setisFilterOn(!isFilterOn);
        }}
      >
        <svg
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          style={{ verticalAlign: "-0.3rem" }}
        >
          <path
            fill="currentColor"
            d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z"
          />
        </svg>
        <span>Filter</span>
      </div>
      <div
        className={`${Style.filterortflexcolumn} ${
          isFilterOn && Style.activeFilter
        }`}
      >
        <div className={Style.filterortflexrow}>
          <div className={Style.flexrowitem}>
            <div className={Style.filterheading}>
              <h3>Brands</h3>
            </div>
            <div className={Style.filters}>
              <section>
                <div className={Style.radio}>
                  <input id="radio_11" name="radio" type="checkbox" />
                  <label htmlFor="radio_11" className={Style.radio_label}>
                    &nbsp;lable1 dknnvzdj
                  </label>
                </div>

                <div className={Style.radio}>
                  <input id="radio_12" name="radio" type="checkbox" />
                  <label htmlFor="radio_12" className={Style.radio_label}>
                    &nbsp;label2akjb nvn ln
                  </label>
                </div>

                <div className={Style.radio}>
                  <input id="radio_13" name="radio" type="checkbox" />
                  <label htmlFor="radio_13" className={Style.radio_label}>
                    &nbsp; label3sb oib
                  </label>
                </div>
                <div className={Style.radio}>
                  <input id="radio_14" name="radio" type="checkbox" />
                  <label htmlFor="radio_14" className={Style.radio_label}>
                    &nbsp;label3sb oib
                  </label>
                </div>
              </section>
            </div>
          </div>
          <div className={Style.flexrowitem}>
            <div className={Style.filterheading}>
              <h3>Brands</h3>
            </div>
            <div className={Style.filters}>
              <section>
                <div className={Style.radio}>
                  <input id="radio_21" name="radio" type="checkbox" />
                  <label htmlFor="radio_21" className={Style.radio_label}>
                    &nbsp;lable1
                  </label>
                </div>

                <div className={Style.radio}>
                  <input id="radio_22" name="radio" type="checkbox" />
                  <label htmlFor="radio_22" className={Style.radio_label}>
                    &nbsp;label2
                  </label>
                </div>

                <div className={Style.radio}>
                  <input id="radio_23" name="radio" type="checkbox" />
                  <label htmlFor="radio_23" className={Style.radio_label}>
                    &nbsp;label3
                  </label>
                </div>
                <div className={Style.radio}>
                  <input id="radio_24" name="radio" type="checkbox" />
                  <label htmlFor="radio_24" className={Style.radio_label}>
                    &nbsp;label3
                  </label>
                </div>
                <div className={Style.radio}>
                  <input id="radio_25" name="radio" type="checkbox" />
                  <label htmlFor="radio_25" className={Style.radio_label}>
                    &nbsp; label3
                  </label>
                </div>
              </section>
            </div>
          </div>
          <div className={Style.flexrowitem}>
            <div className={Style.filterheading}>
              <h3>Sort</h3>
            </div>
            <div className={Style.filters}>
              <section>
                <div className={Style.radio}>
                  <input id="radio_31" name="radio" type="radio" />
                  <label htmlFor="radio_31" className={Style.radio_label}>
                    &nbsp;Most Recent
                  </label>
                </div>

                <div className={Style.radio}>
                  <input id="radio_32" name="radio" type="radio" />
                  <label htmlFor="radio_32" className={Style.radio_label}>
                    &nbsp; Price ascending
                  </label>
                </div>

                <div className={Style.radio}>
                  <input id="radio_33" name="radio" type="radio" />
                  <label htmlFor="radio_33" className={Style.radio_label}>
                    &nbsp; Price descending
                  </label>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={Style.inputRange}>
          <input
            className={Style.slider}
            type="range"
            min={100}
            max={10000}
            value={200}
            onChange={() => {}}
          />

          <button className="button bg_purple">Apply</button>
        </div>
      </div>
    </>
  );
};

export default FilterSort;
