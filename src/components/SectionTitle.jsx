import "../styles/section-title.css";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__title">{title}</h2>
    </div>
  );
}

export default SectionTitle;