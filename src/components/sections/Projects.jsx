import React from "react";
import Project from "../Project";
import "../../styles/styles.css";

function Projects() {
    return (
        <div id="projects" className="projects">
        <Project
          flipped={true}
          title={"HTML Website"}
          description={"My first website written purely with HTML And CSS, created as a part of 'The Complete 2024 Web Development Bootcamp'."}
          link={"https://wooyeoup-rho.github.io/website/"}
          linkText={"Learn more"}
          image={"/images/website.jpg"}
        />
        <Project
          flipped={false}
          title={"Blog"}
          description={"Developed a full-stack web-based blog as part of 'The Complete 2024 Web Development Bootcamp.' The application enables users to create accounts, log in, and manage blog posts (create, edit, delete). Built with HTML, CSS, JavaScript, Node.js, and EJS, with persistent data storage using PostgreSQL."}
          link={"https://github.com/wooyeoup-rho/blog-capstone"}
          linkText={"Learn more"}
          image={"/images/blog.jpg"}
        />
        <Project
          flipped={true}
          title={"Free Will-E"}
          description={"Developed a complete video game using Unity and C# for a course project. Free Will-E is a side-scroller platform game where the user traverses through 3 levels, gaining power-ups along the way."}
          link={"https://play.unity.com/en/games/d3caa684-2fa7-4e25-931a-b01ccfda0810/free-will-e"}
          linkText={"Play here"}
          image={"/images/will-e.png"}
        />
        <Project
          flipped={false}
          title={"Alarm Walker"}
          description={"Developed an Android app using Kotlin and APIs for a course project. Alarm Walker is a fitness app that emulates the feeling of a wild animal chasing after the user. It utilizes Android's Location API to calculate the users speed, and depending on it, dynamically adjusts the volume of the animal sound."}
          link={"https://github.com/AlarmWalker/Mobile_fitness_app"}
          linkText={"Learn more"}
          image={"/images/alarm-walker.png"}
        />
      </div>
    );
}

export default Projects;