import React from "react";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import "../../styles/styles.css";

function Footer() {
  return (
    <div id="footer" className="footer">
      <footer>
        <div className="icon-container">
          <a href="mailto:wooyeoup.rho@gmail.com"><MdOutlineEmail className="icon" size={30}/></a>
          <a href="https://github.com/wooyeoup-rho"><FaGithub className="icon" size={30}/></a>
          <a href="https://leetcode.com/u/9xVRSpCpti/"><SiLeetcode className="icon" size={30}/></a>
        </div>
        <p className="emphasis">Visit my socials too!</p>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Footer;
