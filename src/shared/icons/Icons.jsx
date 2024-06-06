import React from "react";

function Icons({ src, href }) {
    return (
        <a href={href} target="_blanck">
            <img src={src} alt="icons" />
        </a>
    );
}

export default Icons;