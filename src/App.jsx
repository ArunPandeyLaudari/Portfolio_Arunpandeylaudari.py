import React from 'react';
import './App.css';
import {Header} from './assets/components/header/Header';
import {Home} from './assets/components/home/Home';
import About from './assets/components/about/About';
import Skills from './assets/components/myskills/Skills';
import Service from './assets/components/services/Service';
import Qualification from './assets/components/qualification/Qualification';
import Testimonial from './assets/components/testimonial/Testimonial';
import Projects from './assets/components/project/Project';
import Contact from './assets/components/contact/Contact';


 export const App = () => {
  return (
    <>

    <Header/>
   
   <main className="main">
    <Home/>
    <About/>
    <Skills/>
    <Service/>
    <Qualification/>
    <Projects/>
    <Testimonial/>
    <Contact/>
   </main>
    
    </>
  );
}

