// src/components/Testimonials.js
import React from "react";

const Testimonials = () => {
  return (
    <section className="Testimonials">
      <h2>Ce que nos clients disent de nous</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <img src="url-photo-client-1" alt="Client 1" />
          <p>
            "Une équipe exceptionnelle! Ils ont livré notre projet à temps et
            ont dépassé nos attentes."
          </p>
          <p className="client-name">- John Doe, Entreprise XYZ</p>
        </div>
        <div className="testimonial">
          <img src="url-photo-client-2" alt="Client 2" />
          <p>
            "Travailler avec eux a été une expérience agréable. Des
            professionnels dévoués et compétents."
          </p>
          <p className="client-name">- Jane Smith, Startup ABC</p>
        </div>
        <div className="testimonial">
          <img src="url-photo-client-2" alt="Client 2" />
          <p>
            "Travailler avec eux a été une expérience agréable. Des
            professionnels dévoués et compétents."
          </p>
          <p className="client-name">- Jane Smith, Startup ABC</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
