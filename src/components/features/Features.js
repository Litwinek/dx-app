import React, { useEffect } from "react";
import './Features.css';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import phoneFeatures  from '../../assets/phoneFeatures.png';
import Feature from './Feature';
import { featureList } from './data';
import AOS from "aos";
import "aos/dist/aos.css";
const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
        <div className='container features'>
          <div className='u-title' data-aos="fade-up">
            <BsFillBookmarkStarFill color="#F7AE1B" size={30}/>
            <h2>Główne Cechy</h2>
            <p className='u-text-small u-text-dark'>
              DetectX będzie twoim najlepszym wyborem. Zapewni ochronę na wszystkich twoich urządzeniach na których zostanie zainstalowany.
            </p>
          </div>
          <div className='features-content'>
            <div className='features-left' data-aos="fade-right">
              <img src={phoneFeatures} alt='phone'/>
            </div>
            <div className='features-right' data-aos="fade-left">
              {
                featureList.map((feature) => (
                  <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>
                ))
              }
            </div>
          </div>
        </div>
    </section>
    );
};

export default Features;
