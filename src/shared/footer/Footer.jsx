import React from "react";
import "./Footer.css";

// Components
import Icons from "../icons/Icons";

// Data
import { icons } from "../data/data";

function Footer() {
    return (
        <div className="">
            <div className="footer flex white-text">
                <div className="flex blue-bg">
                    <div className="logo white-bg">
                        <a href="#">
                            <img src={require("../../files/images/logo-1.png")} alt="logo" />
                        </a>
                    </div>
                    <div className="location">
                        <h4>Ubicación:</h4>
                        <h5 className="fw-500 margin-0">Estamos ubicados en Santo Domingo, República Dominicana.</h5>
                        <h5 className="fw-400 margin-0">Ofrecemos servicios para todo el mundo.</h5>
                    </div>
                    <div className="links">
                        <a href="#">
                            <h5 className="white-text fw-500">Inicio</h5>
                        </a>
                        <a href="#">
                            <h5 className="white-text fw-500">¿Quiénes somos?</h5>
                        </a>
                        <a href="#">
                            <h5 className="white-text fw-500">Nuestros Servicios</h5>
                        </a>
                        <a href="#">
                            <h5 className="white-text fw-500">Testimonios</h5>
                        </a>
                    </div>
                </div>
                <div className="icons flex column orange-bg">
                    {icons.map((icon, index) => (
                        <Icons key={index} src={icon.src} href={icon.href} />
                    ))}
                </div>
            </div>
            <div className="rights">
                <h6>© Todos los Derechos Reservados - 2024.</h6>
            </div>
        </div>
    );
}

export default Footer;