// import React from 'react';
import { LuBadgeCheck } from "react-icons/lu";

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">
          Frontend Skills
        </h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Tailwind CSS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Bootstrap CSS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">React.js</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Alpine.js</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>


            <div className="skills__group">
              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Swiper.js</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <LuBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Chart.js</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

           
            </div>
          </div>
       </div>
  )
}

export default Frontend;
