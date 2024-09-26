import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const slides = [
    '/src/assets/products/slide1.png',
    '/src/assets/products/slide2.png',
    '/src/assets/products/slide3.png',
    '/src/assets/products/slide4.png',
    '/src/assets/products/slide5.png',
];

export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Muda o slide a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                />
            ))}
        </div>
    );
}
