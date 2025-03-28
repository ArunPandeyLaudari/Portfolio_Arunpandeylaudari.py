import React from 'react';
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { SiWordpress } from "react-icons/si";


const Backend = () => {
  return (
    <div className="skills_content" id="skills">
   
               <span className="skills__tittle">Backend Skills</span>
   
               <div className="skills__container container grid">
   
                   <SiPhp className='skills__icon'/>
                  <SiWordpress className='skills__icon'/>
                   <SiLaravel className='skills__icon'/>
                   <SiPython className='skills__icon'/>
                   <SiFlask className='skills__icon'/>
                   <SiDjango className='skills__icon'/>
                   <SiXampp className='skills__icon'/>
                   <SiMysql className='skills__icon'/>
                   <SiPhpmyadmin className='skills__icon'/>
   
               </div>
   
           </div>
  )
}

export default Backend