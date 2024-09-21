import React from 'react';
import './Header.css';
import logo from '/logo.png';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

export default function Header ({ cartCount }){
    return (
        <header className="header">
            <FiMenu className="icon" />
            <img src={logo} alt="Logo da Loja" className="logo" />
            <div className="icons">
                <FiShoppingCart className="icon" />
                🛒 Carrinho ({cartCount})
            </div>
        </header>
    );
}
