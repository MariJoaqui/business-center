import React from "react";
import "./Home.css";

function Home( props ) {
  return (
    <div className="body">
      <div className="home">
        <div className="navbar">
          <img
            className="logo"
            src={ require("../files/images/logo-1.png") } 
          />
          <div className="icons">
            <a href="#">
              <img src={ require("../files/images/i-whatsapp.png") } />
            </a>
            <a href="https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img src={ require("../files/images/i-instagram.png") } />
            </a>
            <a href="#">
              <img src={ require("../files/images/i-youtube.png") } />
            </a>
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
      <div>
        sdddferrf
      </div>
    </div>
  );
}

export default Home;