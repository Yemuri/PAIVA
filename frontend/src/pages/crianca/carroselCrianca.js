import React, { useState, useEffect } from "react";
import "./crianca.css";

// IMAGENS
import Image1 from "../../images/kids1.jpg";
import Image2 from "../../images/kids2.jpg";
import Image3 from "../../images/kidss3.jpg";
import Image4 from "../../images/kids4.jpg";
import Image5 from "../../images/kids5.jpg";
import Image6 from "../../images/kids6.jpg";
import Image7 from "../../images/kids7.jpg";
import Image8 from "../../images/kids8.jpg";
import Image9 from "../../images/kids9.jpg";
import Image10 from "../../images/kids10.jpg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image8,
  Image9,
  Image10,
];
const intervalTime = 8000; // 8 segundos

export default function CarrosselCrianca() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval); // Limpar o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="cont-geral">
      <div className="cont-items">
        <img
          src={images[currentIndex]}
          alt="Imagem de criança"
          className="carousel-image"
        />
      </div>
      <div className="carousel-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-control ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
