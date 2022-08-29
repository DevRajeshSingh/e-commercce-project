import React from "react";
import style from "./../../styles/Detail.module.css";
const Contact = () => {
  return (
    <form className={style.contact_container}>
      <ul>
        <li>
          <h3>We are always here for you</h3>
        </li>
        <li>
          <div className={style.select}>
            <select name="format" id="format" defaultValue={"Default"}>
              <option disabled value="Default">
                --Select Your Query--
              </option>
              <option className="options" value="orders">
                Orders
              </option>
              <option className="options" value="dilevered">
                Dilevered
              </option>
              <option className="options" value="refund">
                Refund
              </option>
              <option className="options" value="bug">
                Bug
              </option>
              <option className="options" value="feedback">
                Feedback
              </option>
            </select>
          </div>
        </li>
        <li>
        
          <div className={`${style.grid} ${style.grid_2}`}>
            <input type="text" placeholder="Firstname" required />
            <input type="text" placeholder="Surname" required />
          </div>
        </li>
        <li>
          <div className={`${style.grid} ${style.grid_2}`}>
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" />
          </div>
        </li>
        <li>
          <textarea placeholder="Message"></textarea>
        </li>

        <li>
          <div className={`${style.grid} ${style.grid_3}`}>
            <button className={style.btn_grid} type="submit">
              <span className="button">SUBMIT</span>
            </button>
          </div>
        </li>
       
      </ul>
    </form>
  );
};


export default Contact;