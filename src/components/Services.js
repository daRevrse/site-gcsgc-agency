import React from "react";

function Services() {
  return (
    <section className="Services">
      <h1> Nos Services</h1>
      <div className="service-container">
        <div className="service">
          <div className="service1"></div>
          <h2>Développement Web</h2>
          <p>Nous créons des applications web modernes et performantes.</p>
        </div>
        <div className="service">
          <div className="service2"></div>
          <h2>Développement Mobile</h2>
          <p>
            Nos applications mobiles sont conçues pour offrir une expérience
            exceptionnelle.
          </p>
        </div>
        <div className="service">
          <div className="service3"></div>
          <h2>Développement de Sites</h2>
          <p>
            Des sites web élégants et fonctionnels pour répondre à vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
