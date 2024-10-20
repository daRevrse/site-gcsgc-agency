// src/components/Team.js
import React from "react";
import team1 from "../img/Gradient_2021_11_16_23_10_05_wm.jpg";

const Team = () => {
  return (
    <section className="Team">
      <h2>Notre Équipe</h2>
      <div className="team-container">
        <div className="team-member">
          <img src={team1} alt="Nom du membre" />
          <p>Gilles</p>
          <p>CEO</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
