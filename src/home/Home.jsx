import React, { useState } from "react";
import "./Home.css";

// Slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Components
import Icons from "../shared/icons/Icons";
import Cards from "../shared/cards/Cards";
import Opinions from "../shared/opinions/Opinions";

// Data
import { icons, cards, opinions } from "../shared/data/data";

function Home(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 3,
            spacing: 70,
        },
        breakpoints: {
            '(max-width: 1355px)': {
                slides: {
                    perView: 3,
                    spacing: 30,
                },
            },
            '(max-width: 1185px)': {
                slides: {
                    perView: 2,
                    spacing: 40,
                },
            },
            '(max-width: 645px)': {
                slides: {
                    perView: 1,
                    spacing: 40,
                },
            },
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

            {/* ---------- Section 1 ---------- */}
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

            {/* ---------- Section 2 ---------- */}
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

            {/* ---------- Section 3 ---------- */}
            <div className="services">
                <h2>Nuestros Servicios</h2>
                {loaded && instanceRef.current && (
                    <div className="button-container">
                        <SlideButton onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} />
                    </div>
                )}
                <div ref={sliderRef} className="keen-slider">
                    {cards.map((card, index) => (
                        <Cards key={index} title={card.title} description={card.description} src={card.src} />
                    ))}
                </div>
                <h4>Somos la empresa más completa del mercado.</h4>
                <h6 className="text">
                    Para más información consulta&nbsp;
                    <a href="https://www.instagram.com/businesscenterrd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blanck">
                        aquí.
                    </a>
                </h6>
            </div>

            {/* ---------- Section 4 ---------- */}
            <div className="opinions">
                <div className="title">
                    <h2>Testimonios</h2>
                </div>
                <h4>Contamos con una larga trayectoria y nuestros clientes dan fe del buen servicio que ofrecemos.</h4>
                <div className="cards">
                    {opinions.map((opinion, index) => (
                        <Opinions key={index} title={opinion.title} description={opinion.description} />
                    ))}
                </div>
            </div>

            {/* ---------- Footer ---------- */}
            <div>
                <div className="flex">
                    <div className="flex blue-bg">
                        <div className="white-bg">
                            <img src={require("../files/images/logo-1.png")} />
                        </div>
                        <div>
                            <h4>Ubicación</h4>
                            <h5>Estamos ubicados en Santo Domingo, República Dominicana.</h5>
                            <h5>Ofrecemos servicios para todo el mundo.</h5>
                        </div>
                        <div>
                            <h5>Inicio</h5>
                            <h5>¿Quiénes somos?</h5>
                            <h5>Nuestros Servicios</h5>
                            <h5>Testimonios</h5>
                        </div>
                    </div>
                    <div className="icons flex column orange-bg">
                        {icons.map((icon, index) => (
                            <Icons key={index} src={icon.src} href={icon.href} />
                        ))}
                    </div>
                </div>
                <h6>© Todos los Derechos Reservados - 2024.</h6>
            </div>
        </div>
    );
}

function SlideButton(click) {
    return (
        <button onClick={click.onClick} className="slide-button">
            Desliza <i class="fa-solid fa-arrow-right"></i>
        </button>
    )
}

export default Home;