import React from 'react';

import './About.css';

import AboutImg from '../../../assets/images/about.jpg';

import CV from '../../../assets/images/John-Cv.pdf';



 const About = () => {
  return (
  <section className="about section" id="about">

    <h2 className="section__title">About Me</h2>

    <span className="section__subtitle"> My Introduction</span>

    <div className="about__container container grid">

    <img src={AboutImg} alt="" className="about__img" />

    <div className="about__data">

      </div>
    </div>

    </section>
  )
}

export default About;
