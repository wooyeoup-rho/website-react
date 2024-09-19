import React from "react";
import "../../styles/styles.css";

function About() {
    return (
        <div id="about" className="about">
        <img src="/images/im_blue_2.jpg" alt="portrait of me"/>
        <div className="about-text">
          <p className="emphasis">A BIT ABOUT ME</p>
          <p>
            I'm a graduate in computer science who's taken a number of
            internships. Most notably, as a SDET with <span className="emphasis">Cvent</span>.
            I'm experienced in Android automation testing using <span className="emphasis">Espresso, Barista,</span> and <span className="emphasis">UiAutomator.</span>
          </p>
          <p>From my background, I'm adept with the languages <span className="emphasis">Java, Kotlin</span>, and now, web development languages - <span className="emphasis">HTML, CSS, JavaScript.</span></p>
          <p>Feel free to <a href="mailto:wooyeoup.rho@gmail.com"><span className="emphasis">contact me</span>.</a></p>
        </div>
      </div>
    );
}

export default About;