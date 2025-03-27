import React from 'react';

import { LuBadgeCheck } from "react-icons/lu";

 const AppDev = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">App Development Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Dart</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Flutter</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>

      </div>
    
   
    </div>
  )
}

export default AppDev;
