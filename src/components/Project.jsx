import React from "react";

function Project(props) {
    return (
        <div className="project-container">
            {props.flipped && (
                <div className="project-text">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <p><a href={props.link}>{props.linkText}</a></p>
                </div>
            )}
            <img src={props.image} alt="project photo" />
            {!props.flipped && (
                <div className="project-text">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <p><a href={props.link}>{props.linkText}</a></p>
                </div>
            )}
        </div>
    );
}

export default Project;