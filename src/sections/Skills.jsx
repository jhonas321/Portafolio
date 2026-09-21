import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionTitle title="Habilidades" subtitle="Tecnologías" />

        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;