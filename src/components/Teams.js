// src/components/Team.js
import React from "react";

const Team = () => {
  return (
    <section className="Team">
      <h2>Notre Équipe</h2>
      <div className="team-container">
        <div className="team-member">
          <img src="url-de-l-image" alt="Nom du membre" />
          <p>Nom du membre</p>
          <p>Poste occupé</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
