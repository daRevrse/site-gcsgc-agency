// src/components/SocialMedia.js
import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const SocialMedia = () => {
  return (
    <div className="SocialMedia">
      <h2>Suivez-nous sur les Réseaux Sociaux</h2>
      <div className="social-icons">
        <a
          href="lien-de-votre-page-facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialFacebook />
        </a>
        <a
          href="lien-de-votre-page-facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialInstagram />
        </a>
        <a
          href="lien-de-votre-page-facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialTwitter />
        </a>
        {/* Ajoutez d'autres icônes pour d'autres réseaux sociaux */}
      </div>
    </div>
  );
};

export default SocialMedia;
