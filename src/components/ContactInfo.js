// src/components/ContactInfo.js
import React from "react";
import SocialMedia from "./Socials";

const ContactInfo = () => {
  return (
    <div className="ContactInfo">
      <h2>Nos Coordonnées</h2>
      <p>Adresse: Attiegou, Lomé</p>
      <p>Téléphone: +228 93 23 13 46</p>
      <p>Email: info@gcsgcagency.com</p>
      <SocialMedia/>
    </div>
  );
};

export default ContactInfo;
