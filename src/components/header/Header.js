import React, { useEffect } from 'react';
import "./Header.css";
import phoneHeader from '../../assets/phoneHeader.png';
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import { BsMouse } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return(
      <section id="header">
          <div className='container header'>
            <div className='header-left' data-aos="fade-right">
              <h1>
                <span>PEŁNA OCHRONA</span>
                <span>PRZED ZŁOŚLIWYM</span>
                <span>OPROGRAMOWANIEM</span>
              </h1>
              <p className='u-text-small u-text-light'>DetectX został opracowany przez grupę specjalistów ds. cyberbezpieczeństwa, którzy pragneli stworzyc niezawodny program chroniący komputer.</p>
              <div className='header-cta'>
                <Button text={"Rozpocznij"} btnClass={"btn-dark"} href={"#"}/>
                <Button text={"Jak to Działa"} btnClass={"btn-yellow"} href={"#faq"}/>
              </div>
            </div>
            <div className='header-right' data-aos="fade-left">
              <img src={phoneHeader} alt="phone"/>
            </div>
          </div>
          <div className='floating-icon'>
            <a href="#features">
              <BsMouse color='#fff' size={25} className='mouse'/>
            </a>
          </div>
      </section>
  )
};

export default Header;
