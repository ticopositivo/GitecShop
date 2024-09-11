import React from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar" className="search-input" />
            <FiSearch className="search-icon" />
        </div>
    );
}
