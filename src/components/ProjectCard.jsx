import "../styles/project-card.css";

function ProjectCard({ title, description }) {
  return (
    <article className="project-card">
      <span className="project-card__label">
        Proyecto
      </span>

      <h3 className="project-card__title">
        {title}
      </h3>

      <p className="project-card__description">
        {description}
      </p>
    </article>
  );
}

export default ProjectCard;