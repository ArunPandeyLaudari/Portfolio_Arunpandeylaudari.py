import { LuBadgeCheck } from "react-icons/lu";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Laravel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Flask</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">Django</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">C#</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">.Net</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="skills__icon" />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
