import React, { useState } from 'react';
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)} // Corrected onClick attribute
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
          </div>

          <div
            className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)} // Corrected onClick attribute
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelors CS</h3>
                <span className="qualification__subtitle">NUST</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
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
                <h3 className="qualification__title">HSSC</h3>
                <span className="qualification__subtitle">GCU</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC</h3>
                <span className="qualification__subtitle">APS</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Machine Learning Fellow</h3>
                <span className="qualification__subtitle">ByteWise Limited</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> june 2024 - august 2024
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
                <h3 className="qualification__title">Game Programmer</h3>
                <span className="qualification__subtitle">Mindstorm Studios</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> june 2023 - august 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
