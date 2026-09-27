import SectionTitle from "../components/SectionTitle";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle
          title="Sobre mí"
          subtitle="Perfil profesional"
        />

        <div className="about__content">
          <div className="about__text">
            <p>
              Ingeniero Informático con conocimientos en desarrollo de software,
              QA y ciberseguridad.
            </p>

            <p>
              Cuento con experiencia en pruebas funcionales, validación de APIs
              con Postman, bases de datos SQL, control de versiones con Git y
              GitHub, además de desarrollo con Java, Python, JavaScript y React.
            </p>

            <p>
              También cuento con formación complementaria en ciberseguridad, con
              orientación a la calidad, seguridad y mejora continua de sistemas
              y procesos tecnológicos.
            </p>
          </div>

          <div className="about__info">
            <div className="about__item">
              <span className="about__label">Área</span>
              <span className="about__value">Desarrollo de Software</span>
            </div>

            <div className="about__item">
              <span className="about__label">Especialidad</span>
              <span className="about__value">
                Desarrollo Web, QA y Ciberseguridad
              </span>
            </div>

            <div className="about__item">
              <span className="about__label">Ubicación</span>
              <span className="about__value">Cochabamba, Bolivia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;