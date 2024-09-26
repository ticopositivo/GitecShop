import React from 'react';
import './MarcasRecomendadas.css';

const marcas = [
    { id: 1, nome: 'Corsair', imgSrc: '/src/assets/marcas/corsair.jpeg', url: '#', label: 'VER PRODUTOS' },
    { id: 2, nome: 'Intel', imgSrc: '/src/assets/marcas/intel.png', url: '#', label: 'VER PRODUTOS' },
    { id: 3, nome: 'Logitech G', imgSrc: '/src/assets/marcas/logitech.jpeg', url: '#', label: 'VER PRODUTOS' },
    { id: 4, nome: 'Kingston', imgSrc: '/src/assets/marcas/kingston.png', url: '#', label: 'VER PRODUTOS' },
    { id: 5, nome: 'Logitech', imgSrc: '/src/assets/marcas/logitech2.jpeg', url: '#', label: 'VER PRODUTOS' },
    { id: 6, nome: 'Rise Mode', imgSrc: '/src/assets/marcas/risemode.jpeg', url: '#', label: 'VER PRODUTOS' },
    { id: 7, nome: 'Elgato', imgSrc: '/src/assets/marcas/elgato.jpeg', url: '#', label: 'VER PRODUTOS' },
    { id: 8, nome: 'KBM! Gaming', imgSrc: '/src/assets/marcas/kbm.png', url: '#', label: 'VER PRODUTOS' },
];

export default function MarcasRecomendadas() {
    return (
        <section className="marcas-recomendadas">
            <div className="marcas-header">
                <h2>👍 MARCAS RECOMENDADAS</h2>
                <a href="#" className="ver-todas">VER TODAS &gt;</a>
            </div>
            <div className="marcas-grid">
                {marcas.map((marca) => (
                    <div key={marca.id} className="marca-item">
                        <img src={marca.imgSrc} alt={marca.nome} className="marca-img" />
                        <h3>{marca.nome}</h3>
                        <a href={marca.url} className="ver-produtos">{marca.label}</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
