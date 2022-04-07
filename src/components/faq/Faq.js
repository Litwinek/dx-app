import React, { useEffect } from "react";
import { MdOutlineLibraryBooks } from 'react-icons/md';
import Question from './Question';
import { questions } from './data.js';
import AOS from "aos";
import "aos/dist/aos.css";
const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
          <div className='u-title' data-aos="fade-up">
          <MdOutlineLibraryBooks color="#F7AE1B" size={30}/>
          <h2>FAQs</h2>
          <p className='u-text-small u-text-dark'>
            Postaramy się odpowiedzieć klientom na kilka podstawowych pytań dotyczących DetectX.
          </p>
          </div>
          <div className="questions" data-aos="fade-up">
            {
              questions.map((question) => (
                <Question title={ question.title } answer={ question.answer } key={question.id}/>
              ))
            }
          </div>
      </div>
    </section>
    );
};

export default Faq;
