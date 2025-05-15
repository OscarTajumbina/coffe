import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    setLoading(true);
    setBotResponse("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // o "gpt-4o-mini" si tienes acceso
          messages: [{ role: "user", content: userMessage }],
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setBotResponse(data.choices[0].message.content);
      } else {
        setBotResponse("No response from API");
      }
    } catch (error) {
      setBotResponse("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <p>Tel: 123-456-7890</p>
      <p>Email: contacto@cafearoma.com</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          disabled={loading}
          style={{ padding: "10px", width: "70%" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "10px 20px", marginLeft: "10px" }}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {botResponse && (
        <div style={{ marginTop: "20px", background: "#222", color: "#eee", padding: "15px", borderRadius: "8px" }}>
          <strong>Respuesta:</strong>
          <p>{botResponse}</p>
        </div>
      )}
    </section>
  );
}
