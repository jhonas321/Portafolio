import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/experience";

import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <SectionTitle
          title="Experiencia laboral"
          subtitle="Mi trayectoria"
        />

        <div className="experience__timeline">
          {experience.map((item) => (
            <article
              key={item.id}
              className="experience__item"
            >
              <div className="experience__marker"></div>

              <div className="experience__card">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__position">
                      {item.position}
                    </h3>

                    <p className="experience__company">
                      {item.company}
                    </p>
                  </div>

                  <span className="experience__period">
                    {item.period}
                  </span>
                </div>

                <p className="experience__location">
                  {item.location}
                </p>

                <ul className="experience__responsibilities">
                  {item.responsibilities.map((responsibility, index) => (
                    <li key={index}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;