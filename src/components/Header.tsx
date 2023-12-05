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
          <a href="index.html" className="navbar-brand">
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
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#posts" className="nav-link">
                  Latest Post
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="header-inner text-white text-center" id="home">
        <div className="container grid">
          <div className="header-inner-left">
            <h1>your most trusted</h1>
            <p className="lead">the best match services for you</p>
            <p className="text text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
              nulla odit esse necessitatibus corporis voluptatem?
            </p>
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
