import React from 'react'

const Info = () => {
  return (
    <div>
      <div className="about__info grid">
        <div className="about__box">
            <i className="bx bxs-school about__icon"></i>
            <h3 className="about__title">
                University
            </h3>
            <span className="about__subtitle">
                NUST
            </span>
        </div>
        <div className="about__box">
            <i className="bx bxs-briefcase about__icon"></i>
            <h3 className="about__title">
                Experience
            </h3>
            <span className="about__subtitle">
                2 Years
            </span>
        </div>
        <div className="about__box">
        <i class='bx bx-code-block about__icon'></i>
            <h3 className="about__title">
                Work
            </h3>
            <span className="about__subtitle">
            Completed 20+ Projects
            </span>
        </div>
      </div>
    </div>
  )
}

export default Info
