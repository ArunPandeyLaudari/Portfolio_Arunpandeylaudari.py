import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';

import AppDev from './AppDev';
import OtherSkill from './OtherSkill';

import './Skills.css';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">
                Skills
            </h2>

            <div className="skills__container container grid">
              <Frontend />
              <Backend />
              <AppDev />
              <OtherSkill/>
            </div>
        </section>
    )
}

export default Skills