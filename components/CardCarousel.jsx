import React, { useEffect, useState } from "react";
import Style from "./../styles/CardCarousel.module.css";

const CardCarousel = () => {
  useEffect(() => {
    var index = 0;
    var slides = document.querySelectorAll(".slides");
    var dot = document.querySelectorAll(".dot");
    function changeSlide() {
      if (index < 0) {
        index = slides.length - 1;
      }
      if (index > slides.length - 1) {
        index = 0;
      }
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dot[i].style.backgroundColor = "#d3d3d3";
      }
        slides[index].style.display = "block";
        dot[index].style.backgroundColor = "black";
      index++;
      setTimeout(changeSlide, 2000);
    }
    changeSlide();

    return () => {
      clearTimeout(changeSlide);
    };
  }, []);

  return (
    <div className={Style.Card_carousel}>
      <div className={`${Style.slides} slides`}>
        <img
          src="https://cdn.w600.comps.canstockphoto.com/kitchen-equipment-electronics-sale-illustration_csp77258122.jpg"
          width="100%"
        />
      </div>

      <div className={`${Style.slides} slides`}>
        <img
          src="https://ak.picdn.net/shutterstock/videos/1036420073/thumb/4.jpg?ip=x480"
          width="100%"
        />
      </div>

      <div className={`${Style.slides} slides`}>
        <img
          src="https://t4.ftcdn.net/jpg/02/86/26/61/400_F_286266161_BoSKYQl78WavwQfw5pR94SKn9FtTtvzu.jpg"
          width="100%"
        />
      </div>

      <div className={`${Style.slides} slides`}>
        <img
          src="https://image.shutterstock.com/image-illustration/supermarket-sale-banner-household-appliances-260nw-536531950.jpg"
          width="100%"
        />
      </div>

      <div className={`${Style.slides} slides`}>
        <img
          src="https://image.shutterstock.com/image-vector/online-sale-supermarket-household-appliances-260nw-511915801.jpg"
          width="100%"
        />
      </div>

      <div className={Style.dot_container}>
        <span className={`${Style.dot} dot active`}></span>
        <span className={`${Style.dot} dot`}></span>
        <span className={`${Style.dot} dot`}></span>
        <span className={`${Style.dot} dot`}></span>
        <span className={`${Style.dot} dot`}></span>
      </div>
    </div>
  );
};

export default CardCarousel;
