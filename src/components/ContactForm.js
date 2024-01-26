// src/components/ContactForm.js
import React from "react";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <h3>Envoyez-nous un Message</h3>
      <form>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
