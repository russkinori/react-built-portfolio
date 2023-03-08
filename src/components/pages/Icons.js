import React from "react";
import icons from "./Icons.json";
import './styles/Resume.css'

function MyComponent() {
    return (
        <div className="card">
            <span title={icons.title}>
                <a href={icons.githubLink} target="_blank" rel="noreferrer">
                    <img
                        src={icons.image}
                        alt={icons.alt}
                        className="brand__img"
                    />
                </a>
            </span>
        </div>
    );
}

export default MyComponent;
