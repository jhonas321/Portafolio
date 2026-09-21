import SectionTitle from "../components/SectionTitle";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle title="Sobre mí" subtitle="Conóceme" />
      </div>
    </section>
  );
}

export default About;