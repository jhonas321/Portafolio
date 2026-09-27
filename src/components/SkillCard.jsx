import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiHaskell,
  SiPostgresql,
} from "react-icons/si";

import "../styles/skill-card.css";

function SkillCard({ name, icon }) {
  const getIcon = () => {
    switch (icon) {
      case "java":
        return <FaJava />;

      case "html":
        return <FaHtml5 />;

      case "css":
        return <FaCss3Alt />;

      case "javascript":
        return <FaJs />;

      case "react":
        return <FaReact />;

      case "python":
        return <FaPython />;

      case "haskell":
        return <SiHaskell />;

      case "github":
        return <FaGithub />;

      case "postgresql":
        return <SiPostgresql />;

      case "database":
        return <FaDatabase />;

      case "api":
        return <FaCode />;

      case "test":
        return <FaCode />;

      case "code":
        return <FaCode />;

      default:
        return <FaCode />;
    }
  };

  return (
    <article className="skill-card">
      <span className="skill-card__icon">
        {getIcon()}
      </span>

      <span className="skill-card__name">
        {name}
      </span>
    </article>
  );
}

export default SkillCard;