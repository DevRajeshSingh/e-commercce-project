import React from "react";

const HorizontalCsl = () => {
  const prev = () => {
    document.getElementById("slider-container").scrollLeft -= 270;
  };

  const next = () => {
    document.getElementById("slider-container").scrollLeft += 270;
  };

  return (
    <>
      <div className="hcmainslidercontainer">
        <div className="control-prev-btn" onClick={prev}>
          &lt;
        </div>
        <div id="slider-container" className="hcslider">
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
              alt=""
            />
            <span>
              Slide 1
            </span>
          </div>
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1574451311232-cb647e9d71f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
              alt=""
            />
            <span>
            Slide 2
            </span>

          </div>
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1574449423472-4bc6a3d2473d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
              alt=""
            />
            <span>
            Slide 3
            </span>
          </div>
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1574459472673-09bbda49102a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=20"
              alt=""
            />
              <span>
            Slide 4
            </span>
          </div>
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1479981280584-037818c1297d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=20"
              alt=""
            />  <span>
            Slide 5
            </span>
          </div>
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=20"
              alt=""
            />  <span>
            Slide 6
            </span>
          </div>
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1560259324-12a044e67c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=20"
              alt=""
            />  <span>
            Slide 7
            </span>
          </div>
          <div className="hcslide">
            <img
              src="https://images.unsplash.com/photo-1560259324-12a044e67c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=20"
              alt=""
            />  <span>
            Slide 8
            </span>
          </div>
        </div>
        <div className="control-next-btn" onClick={next}>
          &gt;
        </div>
      </div>
    </>
  );
};

export default HorizontalCsl;
