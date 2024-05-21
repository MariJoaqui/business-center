import React from "react";
import "./Home.css";

// Components
import Icons from "../shared/icons/icons";

function Home( props ) {
  const icons = [
    { src: require("../files/images/i-whatsapp.png"), href: "#" },
    { src: require("../files/images/i-instagram.png"), href: "https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { src: require("../files/images/i-youtube.png"), href: "#" }
  ];

  return (
    <div className="body">

      { /* ---------- Section 1 ---------- */ }
      <div className="home"> 
        <div className="navbar">
          <img
            className="logo"
            src={ require("../files/images/logo-1.png") } 
          />
          <div className="icons">
            { icons.map((icon, index) => (
              <Icons key={ index } src={ icon.src } href={ icon.href } />
            ))}
          </div>
        </div>
        <div className="text">
          <h1>Centro de soluciones digitales que ayudarán a crecer tu negocio en el mundo.</h1>
          <h4>Ayudamos a crecer empresas desde el 2008.</h4>
          <a href="https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            Más información
          </a>
        </div>
      </div>

      { /* ---------- Section 2 ---------- */ }
      <div className="about-us">
        <img src={ require("../files/images/quienes-somos.jpg") } />
        <div className="text">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo multidisciplinario, integrado bajo una plataforma tecnológica, 
            alineados bajo una visión que nos permite crear sinergia para potencializar el 
            crecimiento de su empresa.
          </p>
          <a href="https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            Saber más
          </a>
        </div>
      </div>

      { /* ---------- Section 3 ---------- */ }
      <div>
        drgtgt<br></br>uuuy
      </div>
    </div>
  );
}

export default Home;