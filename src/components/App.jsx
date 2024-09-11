import React from 'react';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import ProductGrid from './ProductGrid.jsx';

const products = [
    {
        id: '1',
        image: '/src/assets/products/product1.png',
        title: 'Notebook Gamer Asus ROG Strix',
        price: 'R$ 11.435,28 à vista ou 10x de R$ 1.270,58 sem juros',
    },
    {
        id: '2',
        image: '/src/assets/products/product2.png',
        title: 'SSD M.2 NVME 1TB XPG S70 Blade',
        price: 'R$ 663,00 à vista ou 10x de R$ 78,00 sem juros',
    },
    {
        id: '3',
        image: '/src/assets/products/product3.png',
        title: 'Fone de Ouvido Headset Gamer Warrior Straton USB 2.0 Stereo LED Azul PH244',
        price: 'R$ 189,72 à vista ou 10x de R$ 18,97 sem juros',
    },
    {
        id: '4',
        image: '/src/assets/products/product4.png',
        title: 'Placa de Vídeo RX 6600 8G-V3 Dual ASUS AMD Radeon, 8GB GDDR6',
        price: 'R$ 1.448,99 à vista ou 10x de R$ 160,99 sem juros',
    },
    {
        id: '5',
        image: '/src/assets/products/product5.png',
        title: 'Processador AMD Ryzen 7 5700X3D, 3.6 GHz, (4.1GHz Max Turbo), Cachê 4MB, 8 Núcleos, 16 Threads, AM4',
        price: 'R$ 1.349,99 à vista ou 10x de R$ 149,99 sem juros',
    },
    // Adicione mais produtos conforme necessário
];

export default function App() {
    return (
        <div>
            <Header />
            <SearchBar />
            <ProductGrid products={products} />
        </div>
    );
}
