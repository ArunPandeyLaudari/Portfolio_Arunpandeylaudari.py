import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';

import AppDev from './AppDev';


import './Skills.css';

const Skills = () => {
    return (
        <section className="skills__section" id="skills">
            <h2 className="section__title">
                Skills
            </h2>

            <div className="skills__contain container grid">
              <Frontend />
              <Backend />
                <AppDev />
            </div>
        </section>
    )
}

export default Skills