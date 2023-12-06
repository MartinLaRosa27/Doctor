import { useState } from "react";
import logo from "../assets/logo.webp";
import closeIcon from "../assets/close-icon.webp";
import hamMenuIcon from "../assets/ham-menu-icon.webp";
import header from "../assets/header.webp";

const Header = () => {
  const [show, setShow] = useState<boolean>(true);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <header className="header bg-blue-gradient">
      <nav className="navbar bg-blue">
        <div className="container flex">
          <a href="#home" className="navbar-brand">
            <img src={logo} alt="site logo" />
          </a>
          <button
            type="button"
            className="navbar-show-btn"
            onClick={() => setShow(!show)}
          >
            <img src={hamMenuIcon} />
          </button>

          <div
            className={
              show
                ? "navbar-collapse bg-white"
                : "navbar-collapse bg-white navbar-show"
            }
          >
            <button
              type="button"
              className="navbar-hide-btn"
              onClick={() => setShow(!show)}
            >
              <img src={closeIcon} />
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                Sobre Mí
                </a>
              </li>
              <li className="nav-item">
                <a href="#posts" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="header-inner text-white text-center" id="home">
        <div className="container grid">
          <div className="header-inner-left">
            <p className="lead">Bienvenido a mi espacio virtual dedicado al cuidado de tu salud bucal. Soy la Dr. Schiraldi, un dentista comprometido con ofrecer servicios dentales de alta calidad para mejorar y mantener tu sonrisa.</p>
          </div>
          <div className="header-inner-right">
            <img src={header} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
