import React from "react";
import Accordian from "../Accordian";
const FAQ = () => {
  const questionsandanswers = [
    {
      question: "How do I order?",
      answer: "You can order from our website or call us on 0800 123 4567 or email us at rs@gmail.om  or visit our store.",
    },
    {
      question: "How do I pay?",
      answer: "You can pay by credit card, debit card, or cash on delivery. We accept Visa, MasterCard, American Express, and Discover.  ", 
    },
    {
      question: "How do I cancel my order?",
      answer: "You can cancel your order by calling us on 0800 123 4567 or email us at om@gmail.com or visit our store also you can cancel your order by calling us on 0800 123 4567 or email us at",
    },
    {
      question: "How do I return my order?",
      answer: "You can return your order by calling us on 0800 123 4567 or email us at ",
    },
  ];

  return (
    <div className={"faq_container"}>
      {questionsandanswers.map((question, index) => {
        return (
          <Accordian
            key={index}
            title={question.question}
            answer={question.answer}
          />
        );
      })}
      <style jsx>{`
        .faq_container {
          background: white;
          padding: 20px;
          border-radius: 5px;
          max-width: 1200px;
          width: calc(55% - 40px);
          box-shadow: #dbe2ee 0 0 20px 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #000000;
          position: relative;
          gap: 15px;
          overflow: hidden;
          margin: 15px;
          height: fit-content;
        }


        @media screen and (max-width: 700px) {
          .faq_container {
            width: calc(100% - 30px);
           
          }
        }

      `}</style>
    </div>
  );
};

export default FAQ;
