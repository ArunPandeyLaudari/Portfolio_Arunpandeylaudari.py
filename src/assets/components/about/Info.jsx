import React from 'react';

import { FaAward } from "react-icons/fa";

import { HiBriefcase } from "react-icons/hi";

import { BiSupport } from "react-icons/bi";


const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FaAward className="about__icon" />
        <h3 className="about__title">
          Experience
        </h3>
        <span className="about__subtitle">
          3 Years Working
        </span>
      </div>
      <div className="about__box">
        <HiBriefcase className="about__icon" />
        <h3 className="about__title">
          Completed
        </h3>
        <span className="about__subtitle">
          30+ Projects
        </span>
      </div>
      <div className="about__box">
        <BiSupport className="about__icon" />
        <h3 className="about__title">
         Supports
        </h3>
        <span className="about__subtitle">
          24/7
        </span>
      </div>
    </div>
  );
};

export default Info