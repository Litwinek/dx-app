import React from 'react';
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from "react-icons/fa";
import logoFooter from '../../assets/logoFooter.png';
const Footer = () => {
  return (
    <footer id="footer">
        <div className="container footer">
          <div className="footer-box">
            <h4>Przydatne Linki</h4>
            <div className="footer-links">
              <a href="#">&bull; Pomoc</a>
              <a href="#">&bull; O nas</a>
              <a href="#">&bull; Hosting</a>
              <a href="#">&bull; Kontakt</a>
              <a href="#">&bull; Twórcy</a>  
            </div>
          </div>
          <div className="footer-box">
            <h4>Wsparcie</h4>
            <div className="footer-links">
              <a href="#">&bull; Pomoc</a>
              <a href="#">&bull; O nas</a>
              <a href="#">&bull; Hosting</a>
              <a href="#">&bull; Kontakt</a>
              <a href="#">&bull; RODO</a>  
            </div>
          </div>
          <div className="footer-box">
            <h4>Skontaktuj się</h4>
            <div className="footer-contact">
              <p>
                <FaMapMarkerAlt/> &nbsp; Adres: Polska.
              </p>
              <p>
                <FaPhoneAlt/> &nbsp; Numer telefonu: +48 123 456 789
              </p>
              <p>
                <FaFax/> &nbsp; Fax: +1234567890
              </p>
              <p>
                <FaEnvelope/> &nbsp; Email: info@detectx.pl
              </p>
              <p>
                <FaGlobe/> &nbsp; Strona: www.detectx.pl
              </p>
            </div>
          </div>
          <div className="footer-box">
            <img src={ logoFooter } alt='logo'/>
            <p className="u-small-text">
              Jesteśmy dla ciebie!
            </p>
          </div>
        </div>
    </footer>
    );
};

export default Footer;
