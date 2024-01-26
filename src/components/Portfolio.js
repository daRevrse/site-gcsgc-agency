import React from "react";

function Portfolio() {
  return (
    <section className="Portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="project">
          <img src="url-de-l-image" alt="Nom du projet" />
          <h3>Nom du Projet</h3>
          <p>Description du projet.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
