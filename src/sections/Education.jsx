import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

import "../styles/education.css";

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <SectionTitle
          title="Formación"
          subtitle="Educación"
        />

        <div className="education__grid">
          {education.map((item) => (
            <article
              key={item.id}
              className="education__card"
            >
              <span className="education__label">
                Formación
              </span>

              <h3 className="education__title">
                {item.title}
              </h3>

              <p className="education__institution">
                {item.institution}
              </p>

              <p className="education__location">
                {item.location}
              </p>

              <p className="education__description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;