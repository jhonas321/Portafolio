import SectionTitle from "../components/SectionTitle";
import { socialLinks } from "../data/socialLinks";

import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionTitle title="Contacto" subtitle="Hablemos" />

        <div className="contact__links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;