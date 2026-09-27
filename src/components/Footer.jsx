import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text">
          © 2026 Jonathan Choque Arancibia
        </p>

        <a
          href="#home"
          className="footer__top"
          aria-label="Volver al inicio"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;