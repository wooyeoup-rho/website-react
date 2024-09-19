import React from "react";
import "../styles/top.css"
import "../styles/styles.css"

function IntroAnimation() {
  return (
    <div id="intro-animation" className="intro-animation">
      <div className="big-circle">
        <div className="circle">
          <div className="small-orbit">
            <div className="small-circle"></div>
          </div>
          <div className="medium-orbit">
            <div className="medium-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroAnimation;
