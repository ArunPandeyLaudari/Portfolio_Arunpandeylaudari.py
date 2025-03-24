import React from 'react';

const Social = () => {
    return (
        <div className="home__social">

            <a href="https://www.facebook.com" className="home__social-icon" target='_blank' rel="noopener noreferrer">
                <i className="uil uil-facebook-f"></i>
            </a>

            <a href="https://www.linkedin.com" className="home__social-icon" target='_blank' rel="noopener noreferrer">
                <i className='uil uil-linkedin-alt'></i>
            </a>

            <a href="https://www.instagram.com" className="home__social-icon" target='_blank' rel="noopener noreferrer">

                <i className="uil uil-instagram"></i>
            </a>


            <a href="https://github.com" className="home__social-icon" target='_blank' rel="noopener noreferrer">
                <i className="uil uil-github"></i>
            </a>

        </div>
    );
};

export default Social;