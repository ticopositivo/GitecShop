import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Muda a cada 3 segundos
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [products]);

    return (
        <div className="slideshow-container">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                >
                    {index === currentIndex && (
                        <>
                            <img src={product.image} alt={product.title} className="slide-image" />
                            <div className="slide-info">
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
