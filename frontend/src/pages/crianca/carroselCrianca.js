import React, { useState, useEffect } from 'react';
import './crianca.css';

// IMAGENS 
import Image1 from '../../images/kids1.jpg';
import Image2 from '../../images/kids2.jpg';
import Image3 from '../../images/kids3.jpg';

const images = [Image1, Image2, Image3];
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
        <div className='cont-geral'>
            <div className='cont-items'>
                <img src={images[currentIndex]} alt="Imagem de criança" className='carousel-image' />
            </div>
            <div className='carousel-controls'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-control ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
