import React from 'react'

import './Skills.css'

import Backend from './Backend'
import Frontend from './Frontend'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">
                Skills
            </h2>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills