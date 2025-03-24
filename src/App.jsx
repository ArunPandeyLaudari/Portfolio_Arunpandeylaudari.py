import React from 'react';
import './App.css';
import {Header} from './assets/components/header/Header';
import {Home} from './assets/components/home/Home';


 export const App = () => {
  return (
    <>

    <Header/>
   
   <main className="main">
    <Home/>
    
   </main>
    
    </>
  );
}

