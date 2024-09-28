import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiVisa, SiMastercard } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Redes Sociais */}
                <div className="footer-section">
                    <h4>Siga-nos nas redes sociais</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Formas de Pagamento */}
                <div className="footer-section">
                    <h4>Formas de Pagamento</h4>
                    <div className="payment-icons">
                        <SiVisa />
                        <SiMastercard />
                        <img src="/src/assets/pix.png" alt="Pix" className="pix-icon" />
                    </div>
                </div>

                {/* Contato */}
                <div className="footer-section">
                    <h4>Contato</h4>
                    <div className="contact-info">
                        <FaEnvelope /> contato@gitech.com
                    </div>
                </div>
            </div>

            {/* Direitos Autorais */}
            <div className="footer-bottom">
                <p>© 2024 Gitech. Todos os direitos reservados ao domínio da loja.</p>
            </div>
        </footer>
    );
}
