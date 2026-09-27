import Button from "../components/Button";
import { profile } from "../data/profile";
import profileImage from "../assets/images/perfil.png";

import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">

        <div className="hero__content">
          <p className="hero__greeting">
            Hola, soy
          </p>

          <h1 className="hero__name">
            {profile.name}
          </h1>

          <h2 className="hero__role">
            {profile.role}
          </h2>

          <p className="hero__description">
            {profile.description}
          </p>

          <div className="hero__actions">
            <Button href="#projects">
              Ver proyectos
            </Button>

            <Button
              href="#contact"
              variant="secondary"
            >
              Contactarme
            </Button>

            <a
              href="/CV_Jonathan_Choque_Arancibia.pdf"
              download="CV_Jonathan_Choque_Arancibia.pdf"
              className="button button--secondary"
            >
              Descargar CV
            </a>
          </div>

          <div className="hero__info">
            <span>Desarrollo Web</span>
            <span>QA</span>
            <span>Ciberseguridad</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-container">

            <div className="hero__photo-glow"></div>

            <div className="hero__photo-frame">
              <img
                src={profileImage}
                alt="Jonathan Choque Arancibia"
                className="hero__image"
              />
            </div>

            <div className="hero__floating-card hero__floating-card--top">
              <span className="hero__floating-dot"></span>
              Software Developer
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              Cochabamba, Bolivia
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;