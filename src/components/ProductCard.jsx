import React from 'react';
import './ProductCard.css';
import { FiPlus } from 'react-icons/fi';

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-button">
                <FiPlus />
            </button>
        </div>
    );
}
