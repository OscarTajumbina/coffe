import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState("Haz clic para recibir un chiste 😄");

  const fetchJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setMessage(data.value);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">🤖 Chuck Norris Bot</h1>
      <div className="contact-message">{message}</div>
      <button className="contact-button" onClick={fetchJoke}>
        ¡Dame un chiste!
      </button>
    </div>
  );
};

export default Contact;
