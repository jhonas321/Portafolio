import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

import "../styles/education.css";

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <SectionTitle title="Formación" subtitle="Educación" />

        <div className="education__list">
          {education.map((item) => (
            <article key={item.id} className="education__item">
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <span>{item.period}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;