import React from "react";
import "./Cards.css";

function Cards({ title, description, src }) {
    return (
        <div className="keen-slider__slide number-slide1 flex column">
            <img src={src} alt="slider-img" />
            <h5>{title}</h5>
            <h6 className="fw-500">{description}</h6>
        </div>
    );
}

export default Cards;