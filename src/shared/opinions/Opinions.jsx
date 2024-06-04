import React from "react";
import "./Opinions.css";

function Opinions({ title, description }) {
    return (
        <div className="card">
            <h5 className="margin-0">{title}</h5>
            <h6 className="fw-500 margin-0">{description}</h6>
        </div>
    );
}

export default Opinions;