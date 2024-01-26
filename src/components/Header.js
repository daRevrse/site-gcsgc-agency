// src/components/Header.js
import React, { useState, useEffect } from "react";
import logo from "../img/logohz.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroSectionHeight = heroSection.offsetHeight;
        const isNavbarVisible = window.scrollY > heroSectionHeight;
        setShowNavbar(isNavbarVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${showNavbar ? "visible" : ""}`}>
      <nav className="Navbar">
        <div className="logo">
          <img src={logo} alt="" height={100} />
        </div>
        <ul className="nav-list">
          <li className="halo">
            <a href="/">Services</a>
          </li>
          <li className="halo">
            <a href="/">Projets</a>
          </li>
          <li className="halo">
            <a href="/">A propos</a>
          </li>
        </ul>
        <di>
          <ul className="nav-list">
            <li>
              <a href="/" className="btn btn-primary">
                Demander son devis
              </a>
            </li>
          </ul>
        </di>
      </nav>
    </header>
  );
};

export default Header;
