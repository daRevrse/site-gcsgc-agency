// src/components/ContactForm.js
import React from "react";

const ContactForm = () => {
  return (
    <div className="ContactForm" style={{ padding: '20px' }}>
  <h3>Envoyez-nous un Message</h3>
  <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <label htmlFor="email">Email :</label>
    <input type="email" id="email" name="email" required style={{ padding: '8px', marginBottom: '10px' }} />

    <label htmlFor="message">Message :</label>
    <textarea id="message" name="message" rows="4" required style={{ padding: '8px', marginBottom: '10px' }} />

    <button type="submit" style={{ padding: '10px 20px' }}>Envoyer</button>
  </form>
</div>

  );
};

export default ContactForm;
