import React from 'react';
import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { FaJava } from "react-icons/fa";




const AppDev = () => {
  return (
    <div className="skills_content" id="skills">
   
      <span className="skills__tittle">App Development</span>
   
      <div className="skills__container container grid">
   
        <SiDart className='skills__icon'/>
        <SiFlutter className='skills__icon'/>
        <SiAndroidstudio className='skills__icon'/>
        <FaJava className='skills__icon'/>
      

   
      </div>
   
    </div>
  )
}

export default AppDev