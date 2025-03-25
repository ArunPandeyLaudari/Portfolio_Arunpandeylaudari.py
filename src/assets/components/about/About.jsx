import React from 'react';

import './About.css';

import AboutImg from '../../../assets/images/arunprofile.jpg';

import CV from '../../../assets/images/John-Cv.pdf';
import Info from './Info';





 const About = () => {
  return (
  <section className="about section" id="about">
    
    <h2 className="section__title">About Me</h2>
    <div className="about__container container grid">


    <img src={AboutImg} alt="" className="about__img" />

    <div className="about__data">

    <Info/>

    <p className="about__description"> 
    I am a full stack developer with a passion for creating beautiful and functional websites. I have a strong background in web development and design, and I am always looking for new ways to improve my skills and learn new technologies. I am a quick learner and a problem solver, and I am always up for a challenge. I am currently looking for new opportunities to work on exciting projects and collaborate with other talented developers. 

      </p>

      <a href={CV} download="" className="button button--flex">
        Download CV 
        
        <i className="uil uil-download-alt button__icon"></i>
      </a>

    </div>

    </div>
    </section>
  );
};

export default About;
