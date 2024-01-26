import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./Socials";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="Contact">
          <div className="contact-container">
            <div className="info">
              <ContactInfo />
              <SocialMedia />
            </div>
            <ContactForm />
          </div>
        </div>

        <p>&copy; 2024 Votre Entreprise. Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default Footer;
