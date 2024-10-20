// src/components/Testimonials.js
import React from "react";
import client1 from "../img/client1.jpg";
import client2 from "../img/client2.jpg";
//import client3 from "../img/client3.jpg";

const Testimonials = () => {
  return (
    <section className="Testimonials">
      <h2>Ce que nos clients disent de nous</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <img src={client1} alt="Client 1" />
          <p>
            "Une équipe exceptionnelle! Ils ont livré notre projet à temps et
            ont dépassé nos attentes."
          </p>
          <p className="client-name">- John Doe, Entreprise XYZ</p>
        </div>
        <div className="testimonial">
          <img src={client2} alt="Client 2" />
          <p>
            "Travailler avec eux a été une expérience agréable. Des
            professionnels dévoués et compétents."
          </p>
          <p className="client-name">- Jane Smith, Startup ABC</p>
        </div>
        {/* <div className="testimonial">
          <img src={client3} alt="Client 3" />
          <p>
            "Travailler avec eux a été une expérience agréable. Des
            professionnels dévoués et compétents."
          </p>
          <p className="client-name">- Jane Smith, Startup ABC</p>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
