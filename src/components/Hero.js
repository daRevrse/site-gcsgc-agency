import React from "react";
import logo from "../img/logo500x300-nobg.png";

function Hero() {
  return (
    <div className="App-header" id="hero">
      <div className="Navbar-hero">
        <div className="logo">Votre Logo</div>
        <nav className="Navbar">
          <ul className="nav-list">
            <li>
              <a href="#section1">Section 1</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-content">
        {/*<div className="logo-image"></div>*/}
        <img src={logo} alt="" />
        <h1>Notre Entreprise de Développement</h1>
        <p>
          Spécialistes dans le développement d'applications web, mobiles et de
          sites.
        </p>
        <a href="#Contact" className="btn btn-primary">
          Contactez-nous
        </a>
      </div>
    </div>
  );
}

export default Hero;
