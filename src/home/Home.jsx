import React, { useState } from "react";
import "./Home.css";

// Slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Components
import Icons from "../shared/icons/Icons";
import Cards from "../shared/cards/Cards";

function Home(props) {

  { /* Icons */ }
  const icons = [
    { src: require("../files/images/i-whatsapp.png"), href: "#" },
    { src: require("../files/images/i-instagram.png"), href: "https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { src: require("../files/images/i-youtube.png"), href: "#" }
  ];

  { /* Cards */ }
  const cards = [
    { title: "Secretaría remota", description: "Asistencia administrativa profesional sin necesidad de contratar personal a tiempo completo.", src: require("../files/images/servicios-1.jpg") },
    { title: "CRM Gestión de clientes", description: "Optimiza la relación con tus clientes mediante sistemas CRM personalizados.", src: require("../files/images/servicios-2.jpg") },
    { title: "Mensajería", description: " Servicio rápido y confiable para la entrega de documentos y paquetes.", src: require("../files/images/servicios-3.jpg") },
    { title: "Agenda de citas inteligente", description: "Programa y gestiona tus citas con recordatorios automáticos y sincronización en tiempo real.", src: require("../files/images/servicios-1.jpg") },
    { title: "Salón de conferencias", description: "Modernas salas equipadas con tecnología avanzada para reuniones y eventos.", src: require("../files/images/servicios-2.jpg") },
    { title: "Grabación de Spot publicitario", description: "Creamos spots publicitarios impactantes y de alta calidad.", src: require("../files/images/servicios-3.jpg") },
    { title: "Creación de Videos publicitarios", description: "Producción de videos publicitarios que destacan tu marca.", src: require("../files/images/servicios-1.jpg") },
    { title: "Gestión de redes sociales", description: "Estrategias personalizadas para mejorar tu presencia en redes sociales.", src: require("../files/images/servicios-2.jpg") },
    { title: "Diseño de Logotipo", description: "Logotipos únicos que reflejan la identidad de tu marca.", src: require("../files/images/servicios-3.jpg") },
    { title: "Desarrollo de Página web", description: "Páginas web atractivas y funcionales para una excelente experiencia de usuario.", src: require("../files/images/servicios-1.jpg") },
    { title: "Geofencing y marketing de proximidad", description: "Estrategias para atraer clientes en ubicaciones específicas.", src: require("../files/images/servicios-2.jpg") },
    { title: "Presencia en distintas plataformas", description: "Establece y mantén una fuerte presencia en diversas plataformas digitales.", src: require("../files/images/servicios-3.jpg") }
  ];

  { /* Slider */ }
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 70,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="body">

      { /* ---------- Section 1 ---------- */}
      <div className="home">
        <div className="navbar flex">
          <img
            className="logo"
            src={require("../files/images/logo-1.png")}
          />
          <div className="icons flex column blue-bg">
            {icons.map((icon, index) => (
              <Icons key={index} src={icon.src} href={icon.href} />
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

      { /* ---------- Section 2 ---------- */}
      <div className="about-us flex">
        <img src={require("../files/images/quienes-somos.jpg")} />
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

      { /* ---------- Section 3 ---------- */}
      <div className="services">
        <h2>Nuestros Servicios</h2>
        {loaded && instanceRef.current && (
          <SlideButton onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} />
        )}
        <div ref={sliderRef} className="keen-slider">
          {cards.map((card, index) => (
            <Cards key={index} title={card.title} description={card.description} src={card.src} />
          ))}
        </div>
        <h4>Somos la empresa más completa del mercado.</h4>
        <h6>Para más información consulta aquí.</h6>
      </div>
    </div>
  );
}

function SlideButton(click) {
  return (
    <button onClick={click.onClick}>
      Desliza <i class="fa-solid fa-arrow-right"></i>
    </button>
  )
}

export default Home;