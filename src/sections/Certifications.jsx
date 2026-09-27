import SectionTitle from "../components/SectionTitle";
import { certifications } from "../data/certifications";

import "../styles/certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <SectionTitle
          title="Cursos y certificaciones"
          subtitle="Formación complementaria"
        />

        <div className="certifications__grid">
          {certifications.map((item) => (
            <article
              key={item.id}
              className="certifications__card"
            >
              <span className="certifications__date">
                {item.date}
              </span>

              <h3 className="certifications__title">
                {item.title}
              </h3>

              <p className="certifications__institution">
                {item.institution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;