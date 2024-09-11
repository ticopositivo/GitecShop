import React from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products }) {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
