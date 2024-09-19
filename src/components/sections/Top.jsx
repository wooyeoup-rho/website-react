import React from "react";
import IntroAnimation from "../IntroAnimation";
import "../../styles/top.css"
import "../../styles/styles.css";

function Top() {
    return (
        <div id="top" className="top">
            <div id="intro-text" className="intro-text">
            <h1>
                Hi, I'm <span className="emphasis">Wooyeoup.</span>
            </h1>
            <p>
                I'm a <span className="emphasis">programmer</span> and{" "}
                <span className="emphasis">tester.</span>
            </p>
            </div>
            <IntroAnimation />
        </div>
    );
}

export default Top;