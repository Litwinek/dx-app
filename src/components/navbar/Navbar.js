import React, { useState } from 'react';
import './Navbar.css';
import { FaFirstOrderAlt } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from '../UI/button/Button';
import "../UI/button/Button.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className='container navbar'>
        <div className='logo'>
          <FaFirstOrderAlt color="#fff" size={33}/>
          <p className='logo-text'>
            Detect<span>X</span>
          </p>
        </div>
        <menu>
          <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
            <li><a href="#">Dom</a></li>
            <li><a href="#features">Szczegóły</a></li>
            <li><a href="#download">Pobierz</a></li>
            <li><a href="#subscribe">Newsletter</a></li>
            <li className='nav-btn'><Button text={"Więcej"} btnClass={"btn-dark"} href={"#faq"}/></li>
            {/* <li className='nav-btn'><a href="#" className='btn btn-dark'>Get Started</a></li> */}
          </ul>
        </menu>
        <div className='menu-icons' onClick={toggleMenu}>
          {
            showMenu ? ( 
                <RiCloseLine color="#fff" size={30}/> 
             ) : (
                <AiOutlineBars color="#fff" size={27}/> 
                )}
        </div>
    </nav>
  );
};

export default Navbar;
