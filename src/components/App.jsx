import React from 'react';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import ProductGrid from './ProductGrid.jsx';
import Footer from './Footer.jsx';
import Slideshow from './Slideshow.jsx';


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
    {
        id: '6',
        image: '/src/assets/products/product6.png',
        title: 'Console Sony PlayStation 5 Slim, Branco + 2 Jogos',
        price: 'R$ 3.719,07 à vista ou 10x de R$ 399,99 sem juros',
    },
    {
        id: '7',
        image: '/src/assets/products/product7.png',
        title: 'Monitor Gamer Curvo KBM! GAMING MG700 27", 240hz, Full HD, 1ms, DisplayPort e HDMI, 96% SRGB, Adaptive Sync, Ajuste De Altura',
        price: 'R$ 989,99 à vista ou 10x de R$ 109,99 sem juros',
    },
    {
        id: '8',
        image: '/src/assets/products/product8.png',
        title: 'Water Cooler Gigabyte Aorus 240, RGB, 240mm, Intel/AMD, com Display LCD, Preto - GP-AORUS WATERFORCE X II 240',
        price: 'R$ 1.089,99 à vista ou 10x de R$ 123,86 sem juros',
    },
    {
        id: '9',
        image: '/src/assets/products/product9.png',
        title: 'Placa Mãe Gigabyte B550M Aorus Elite, AMD AM4, Micro ATX, DDR4',
        price: 'R$ 897,88 à vista ou 10x de R$ 94,51 sem juros',
    },
    // Adicione mais produtos conforme necessário
];

export default function App() {
    return (
        <div>
            <Header />
            <SearchBar />
            <ProductGrid products={products} />
            <Footer />
        </div>
    );
}
