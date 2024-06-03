import React from "react";
import "./Opinions.css";

function Opinions({ title, description }) {
    return (
        <div className="card">
            <h5>{title}</h5>
            <h6>{description}</h6>
        </div>
    );
}

export default Opinions;