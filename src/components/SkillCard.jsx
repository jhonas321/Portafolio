import "../styles/skill-card.css";

function SkillCard({ name }) {
  return (
    <article className="skill-card">
      <span>{name}</span>
    </article>
  );
}

export default SkillCard;