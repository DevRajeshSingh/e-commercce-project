import { useState } from "react";
import style from "../styles/Accordian.module.css";
const Accordion = ({ title, answer }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={style.accordion_wrapper}>
      <div
        className={`${style.accordion_title} ${isOpen ? style.open : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div
        className={`${style.accordion_item} ${!isOpen ? style.collapsed : ""}`}
      >
        <div className={style.accordion_content}>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
