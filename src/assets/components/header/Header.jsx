
import React, { useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngular } from "react-icons/fa";

export const Header = () => {
/* Toggle Menu */
    const [Toggle, showMenu] = useState(false);

    return (
        <header className='header'>

            <nav className="nav container">

            <a href="/" className="nav__logo">
                
            <FaAngular  />
                
            </a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                   
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                    <i className="uil uil-user nav__icon"></i>
                    About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                    <i className="uil uil-file-alt nav__icon"></i>
                    Skills
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#services" className="nav__link">
                    <i className="uil uil-briefcase-alt nav__icon"></i>
                    Services
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                    <i className="uil uil-scenery nav__icon"></i>
                    Portfolio
                    </a>
                </li>


                <li className="nav__item">
                    <a href="#project" className="nav__link">
                    <i className="uil uil-folder nav__icon"></i>
                    Projects
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                    <i className="uil uil-message nav__icon"></i>
                    Contact
                    </a>
                </li>
                </ul>

                <i className="uil uil-times nav__close" 
                
                onClick={()=>showMenu(!Toggle)}
                ></i>
            </div>

            <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
               
               <GiHamburgerMenu/>
                       </div>
            </nav>

        </header>
        );
};

