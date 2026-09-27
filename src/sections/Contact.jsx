import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import SectionTitle from "../components/SectionTitle";
import { socialLinks } from "../data/socialLinks";

import "../styles/contact.css";

function Contact() {
  const getIcon = (name) => {
    switch (name) {
      case "Correo":
        return <FaEnvelope />;

      case "GitHub":
        return <FaGithub />;

      case "LinkedIn":
        return <FaLinkedin />;

      default:
        return null;
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionTitle
          title="Contacto"
          subtitle="Hablemos"
        />

        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__title">
              ¿Tienes una idea o proyecto?
            </h3>

            <p className="contact__description">
              Puedes contactarme mediante cualquiera de estos medios.
            </p>

            <p className="contact__location">
              <FaLocationDot />
              Cochabamba, Bolivia
            </p>
          </div>

          <div className="contact__links">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.name === "Correo" ? undefined : "_blank"}
                rel={link.name === "Correo" ? undefined : "noreferrer"}
                className="contact__link"
              >
                <span className="contact__icon">
                  {getIcon(link.name)}
                </span>

                <div className="contact__link-content">
                  <span className="contact__link-name">
                    {link.name}
                  </span>

                  <span className="contact__link-value">
                    {link.value}
                  </span>
                </div>

                <span className="contact__arrow">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;