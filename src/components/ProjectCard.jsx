import "../styles/project-card.css";

function ProjectCard({ title, description, technologies = [] }) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{title}</h3>

      <p className="project-card__description">{description}</p>

      <div className="project-card__technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;