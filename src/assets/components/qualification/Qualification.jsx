import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section className="qualification-section" id="qualification">
            <h2 className="section__title">My Qualifications</h2>
            <div className="qualification-container container">
                <div className="qualification__tabs">
                    <button
                        className={`qualification__button ${activeTab === "education" ? "qualification__active" : ""
                            }`}
                        onClick={() => setActiveTab("education")}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </button>

                    <button
                        className={`qualification__button ${activeTab === "experience" ? "qualification__active" : ""
                            }`}
                        onClick={() => setActiveTab("experience")}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </button>
                </div>
            </div>

            <div className="qualification__sections">
                {/* Education Section */}
                {activeTab === "education" && (
                    <div className="qualification__content qualification__active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor Of Computer Application (BCA)</h3>
                                <a href=""> <span className="qualification__subtitle">Lumbini ICT Campus</span></a>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">School Leaving Certificate(SLC)(+2)</h3>
                                <a href=""> <span className="qualification__subtitle">Aroma College</span></a>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">


                            <div>
                                <h3 className="qualification__title">
                                    Secondary Education Examination (SEE)
                                </h3>
                                <a href=""> <span className="qualification__subtitle">Usha English Boarding School</span></a>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Experience Section */}
                {activeTab === "experience" && (
                    <div className="qualification__content qualification__active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Development Tutor
                                </h3>
                                <a href=""><span className="qualification__subtitle">Lumbini ICT Campus</span> </a>                            <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Qualification;
