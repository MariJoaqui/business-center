import React from "react";
import "./Home.css";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// Components
import Icons from "../shared/icons/Icons.js";
import Cards from "../shared/cards/Cards.js";

function Home( props ) {

  { /* Icons */ }
  const icons = [
    { src: require("../files/images/i-whatsapp.png"), href: "#" },
    { src: require("../files/images/i-instagram.png"), href: "https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { src: require("../files/images/i-youtube.png"), href: "#" }
  ];

  { /* Services */ }
  const cards = [
    { title: "Secretaría remota", description: "Nuestros servicios de secretaría remota te permiten contar con asistencia administrativa profesional sin necesidad de contratar personal a tiempo completo. Gestionamos tus llamadas, correos y agenda con eficiencia.", src: require("../files/images/servicios-1.jpg") },
    { title: "CRM Gestión de clientes", description: "Implementamos y gestionamos sistemas CRM personalizados para optimizar la relación con tus clientes. Mantén toda la información organizada y mejora tus estrategias de ventas y servicio al cliente.", src: require("../files/images/servicios-2.jpg") },
    { title: "Mensajería", description: "Ofrecemos servicios de mensajería rápida y confiable para asegurarte de que tus documentos y paquetes lleguen a tiempo. Nos encargamos de la logística para que tú te enfoques en tu negocio.", src: require("../files/images/servicios-3.jpg") },
    { title: "Agenda de citas inteligente", description: "Nuestra agenda de citas inteligente facilita la programación y gestión de tus reuniones y eventos. Con recordatorios automáticos y sincronización en tiempo real, nunca perderás una cita importante.", src: require("../files/images/servicios-1.jpg") },
    { title: "Salón de conferencias", description: "Disponemos de modernas salas de conferencias equipadas con la última tecnología para tus reuniones, presentaciones y eventos corporativos. Espacios cómodos y profesionales para impresionar a tus clientes y colaboradores.", src: require("../files/images/servicios-2.jpg") },
    { title: "Grabación de Spot publicitario", description: "Creamos spots publicitarios impactantes que capturan la esencia de tu marca. Nuestro equipo de producción se encarga de cada detalle, desde el guion hasta la postproducción.", src: require("../files/images/servicios-3.jpg") },
    { title: "Creación de Videos publicitarios", description: "Diseñamos y producimos videos publicitarios de alta calidad para promocionar tus productos y servicios. Contamos con expertos en todas las etapas de producción para asegurar resultados excepcionales.", src: require("../files/images/servicios-1.jpg") },
    { title: "Gestión de redes sociales", description: "Potencia tu presencia online con nuestra gestión integral de redes sociales. Desarrollamos estrategias personalizadas, creamos contenido atractivo y monitorizamos el rendimiento para maximizar tu alcance y engagement.", src: require("../files/images/servicios-2.jpg") },
    { title: "Diseño de Logotipo", description: "Diseñamos logotipos únicos y memorables que reflejan la identidad de tu marca. Nuestro proceso creativo asegura un resultado que destaca en el mercado y resuena con tu público objetivo.", src: require("../files/images/servicios-3.jpg") },
    { title: "Desarrollo de Página web", description: "Creamos páginas web atractivas y funcionales que ofrecen una excelente experiencia de usuario. Desde el diseño hasta la implementación, nos aseguramos de que tu sitio web sea una herramienta poderosa para tu negocio.", src: require("../files/images/servicios-1.jpg") },
    { title: "Geofencing y marketing de proximidad", description: "Implementamos estrategias de geofencing y marketing de proximidad para atraer clientes en ubicaciones específicas. Utiliza la tecnología para llegar a tu audiencia en el momento y lugar precisos.", src: require("../files/images/servicios-2.jpg") },
    { title: "Presencia en distintas plataformas", description: "Te ayudamos a establecer y mantener una fuerte presencia en diversas plataformas digitales. Desde sitios web y redes sociales hasta aplicaciones móviles, garantizamos que tu marca sea visible y accesible.", src: require("../files/images/servicios-3.jpg") }
  ];

  { /* Slider */ }
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 70,
    },
  });

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
          { cards.map((card, index) => (
            <Cards key={ index } title={ card.title } description={ card.description } src={ card.src } />
          ))}
        </div>
        <h4>Somos la empresa más completa del mercado.</h4>
        <h6>Para más información consulta aquí.</h6>
      </div>
    </div>
  );
}

export default Home;