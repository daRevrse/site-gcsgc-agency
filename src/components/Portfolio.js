import React from "react";
import projet1 from "../img/ftball-removebg-preview.png";
import projet2 from "../img/2.png";

function Portfolio() {
  return (
    <section className="Portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <div className="project">
          <img src={projet1} alt="Goal Live Togo" style={{width:"80px", height:"80px"}}/>
          <h3>Goal Live Togo</h3>
          <p>Score en direct du foot togolais</p>
        </div>
        <div className="project">
          <img src={projet2} alt="Taxi d'afrique" style={{width:"80px", height:"80px"}}/>
          <h3>Taxi d'afrique</h3>
          <p>Le Gozem des longs trajets</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
