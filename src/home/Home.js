import React from "react";
import "./Home.css";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// Components
import Icons from "../shared/icons/icons";

function Home( props ) {

  { /* Icons */ }
  const icons = [
    { src: require("../files/images/i-whatsapp.png"), href: "#" },
    { src: require("../files/images/i-instagram.png"), href: "https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { src: require("../files/images/i-youtube.png"), href: "#" }
  ];

  { /* Slider */ }
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 140,
    },
  })

  return (
    <div className="body">

      { /* ---------- Section 1 ---------- */ }
      <div className="home"> 
        <div className="navbar flex">
          <img
            className="logo"
            src={ require("../files/images/logo-1.png") } 
          />
          <div className="icons flex column blue-bg">
            { icons.map((icon, index) => (
              <Icons key={ index } src={ icon.src } href={ icon.href } />
            ))}
          </div>
        </div>
        <div className="text">
          <h1>Centro de soluciones digitales que ayudarán a crecer tu negocio en el mundo.</h1>
          <h4 className="blue-text">Ayudamos a crecer empresas desde el 2008.</h4>
          <a className="white-text orange-bg"
             href="https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            Más información
          </a>
        </div>
      </div>

      { /* ---------- Section 2 ---------- */ }
      <div className="about-us flex">
        <img src={ require("../files/images/quienes-somos.jpg") } />
        <div className="text flex column">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo multidisciplinario, integrado bajo una plataforma tecnológica, 
            alineados bajo una visión que nos permite crear sinergia para potencializar el 
            crecimiento de su empresa.
          </p>
          <a className="white-text orange-bg"
             href="https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            Saber más
          </a>
        </div>
      </div>

      { /* ---------- Section 3 ---------- */ }
      <div className="services">
        <h2>Nuestros Servicios</h2>

        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 flex column">
            <img src={ require("../files/images/servicios-1.jpg") } />
            <h5>Páginas Web</h5>
            <h6>Servicio de Diseño y Desarrollo Web</h6>
          </div>
          <div className="keen-slider__slide number-slide1 flex column">
            <img src={ require("../files/images/servicios-1.jpg") } />
            <h5>Páginas Web</h5>
            <h6>Servicio de Diseño y Desarrollo Web</h6>
          </div>
          <div className="keen-slider__slide number-slide1 flex column">
            <img src={ require("../files/images/servicios-1.jpg") } />
            <h5>Páginas Web</h5>
            <h6>Servicio de Diseño y Desarrollo Web</h6>
          </div>
          <div className="keen-slider__slide number-slide1 flex column">
            <img src={ require("../files/images/servicios-1.jpg") } />
            <h5>Páginas Web</h5>
            <h6>Servicio de Diseño y Desarrollo Web</h6>
          </div>
          <div className="keen-slider__slide number-slide1 flex column">
            <img src={ require("../files/images/servicios-1.jpg") } />
            <h5>Páginas Web</h5>
            <h6>Servicio de Diseño y Desarrollo Web</h6>
          </div>
          <div className="keen-slider__slide number-slide1 flex column">
            <img src={ require("../files/images/servicios-1.jpg") } />
            <h5>Páginas Web</h5>
            <h6>Servicio de Diseño y Desarrollo Web</h6>
          </div>
        </div>

        <h4>Somos la empresa más completa del mercado.</h4>
        <h6>Para más información consulta aquí.</h6>
      </div>
    </div>
  );
}

export default Home;