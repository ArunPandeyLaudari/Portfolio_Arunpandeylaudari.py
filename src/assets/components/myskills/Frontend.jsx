import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiAlpinedotjs } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiChartdotjs } from "react-icons/si";

import './Skills.css';

const Frontend = () => {
    return (
        <div className="skills_content" id="skills">

            
            <span className="skills__tittle">Frontend Skills</span>

            <div className="skills__container container grid">

                <FaReact className='skills__icon'/>
                <SiAlpinedotjs className='skills__icon'/>
                <SiChartdotjs className='skills__icon'/>
                <FaJs className='skills__icon'/>
                <SiVite className='skills__icon'/>
                <SiTailwindcss className='skills__icon'/>
                <FaBootstrap className='skills__icon'/>
                <FaHtml5 className='skills__icon'/>
                <FaCss3Alt className='skills__icon'/>
              

                

            </div>

        </div>
    )
}

export default Frontend