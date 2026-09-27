import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          JC
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__nav ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#about" onClick={closeMenu}>
            Sobre mí
          </a>

          <a href="#skills" onClick={closeMenu}>
            Habilidades
          </a>

          <a href="#projects" onClick={closeMenu}>
            Proyectos
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experiencia
          </a>

          <a href="#education" onClick={closeMenu}>
            Formación
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Cursos
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
