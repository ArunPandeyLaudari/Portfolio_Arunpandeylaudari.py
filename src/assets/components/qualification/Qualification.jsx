import React from 'react';

import './Qualification.css';

const Qualification = () => {
    return (
        <section className="qualification-section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <div className="qualification-container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex"></div>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education

                </div>
                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience

                </div>
            </div>


            <div className="qualification__sections">

                {/* Education */}

                <div className="qualification__content qualification__content-active">

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor Of Computer Application</h3>
                            <span className="qualification__subtitle">Tribhuvan University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div className=""></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">Aroma College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary Education Examination (SEE)</h3>
                            <span className="qualification__subtitle">Usha English Boarding School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>


                {/* Experience */}

                <div className="qualification__content">

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor Of Computer Application</h3>
                            <span className="qualification__subtitle">Tribhuvan University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div className=""></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">Aroma College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary Education Examination (SEE)</h3>
                            <span className="qualification__subtitle">Usha English Boarding School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

            </div>
                        
        </section>
    );
}

export default Qualification;