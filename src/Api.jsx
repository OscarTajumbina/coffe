import React, { useState } from "react";
import "./Api.css";

export default function Api() {
  const [imageUrl, setImageUrl] = useState("https://coffee.alexflipnote.dev/random");

  const getNewImage = () => {
    // Agrega un parámetro random para forzar la recarga de imagen
    const randomParam = Math.floor(Math.random() * 10000);
    setImageUrl(`https://coffee.alexflipnote.dev/random?${randomParam}`);
  };

  return (
    <div className="api-container">
      <h2>Random Coffee Image</h2>
      <button className="api-button" onClick={getNewImage}>
        Get New Image
      </button>
      <div>
        <img className="api-image" src={imageUrl} alt="Coffee" />
      </div>
    </div>
  );
}
