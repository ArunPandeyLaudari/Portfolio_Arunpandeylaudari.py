import React from 'react';
import './App.css';
import {Header} from './assets/components/header/Header';
import {Home} from './assets/components/home/Home';
import About from './assets/components/about/About';
import Skills from './assets/components/myskills/Skills';




 export const App = () => {
  return (
    <>

    <Header/>
   
   <main className="main">
    <Home/>
    <About/>
    <Skills/>
   </main>
    
    </>
  );
}

