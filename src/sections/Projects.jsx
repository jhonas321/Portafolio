import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionTitle
          title="Proyectos"
          subtitle="Mi trabajo"
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;