// src/components/Process.js
import React from "react";

const Process = () => {
  return (
    <section className="Process">
      <h1>Notre Processus de Travail</h1>
      <div className="process-container">
        <div className="process-step">
          <div className="process1"></div>
          <h3>Étape 1: Compréhension des Besoins</h3>
          <p>
            Nous commençons par une phase de consultation approfondie pour
            comprendre les besoins spécifiques de votre projet. Cela inclut une
            analyse des fonctionnalités requises, des objectifs commerciaux et
            des contraintes techniques.
          </p>
        </div>
        <div className="process-step">
          <div className="process2"></div>
          <h3>Étape 2: Planification et Conception</h3>
          <p>
            Sur la base des informations recueillies, notre équipe travaille sur
            la planification du projet et la conception initiale. Cela comprend
            la création de wireframes, le choix des technologies et
            l'élaboration d'une feuille de route détaillée.
          </p>
        </div>
        <div className="process-step">
          <div className="process3"></div>
          <h3>Étape 3: Développement</h3>
          <p>
            Nos développeurs commencent le processus de codage en suivant les
            meilleures pratiques de développement. Nous assurons une
            communication régulière avec vous pour obtenir des retours et des
            ajustements continus.
          </p>
        </div>
        <div className="process-step">
          <div className="process4"></div>
          <h3>Étape 4: Tests et Révisions</h3>
          <p>
            Chaque phase de développement est suivie de tests rigoureux pour
            garantir la qualité et la fiabilité. Nous vous présentons ensuite
            les résultats pour des révisions et des ajustements, si nécessaire.
          </p>
        </div>
        <div className="process-step">
          <div className="process5"></div>
          <h3>Étape 5: Livraison et Formation</h3>
          <p>
            Une fois que le projet est terminé et approuvé, nous procédons à la
            livraison. Nous pouvons également fournir des sessions de formation
            pour assurer une adoption en douceur de la nouvelle solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
