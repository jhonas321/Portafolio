import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a href="#home" className="navbar__logo">
          Portfolio
        </a>

        <nav className="navbar__nav">
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
          <a href="#education">Formación</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;