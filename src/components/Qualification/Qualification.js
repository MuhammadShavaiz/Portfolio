import React from 'react'
import"./Qualification.css"
const Qualification = () => {
  return (
    <section className="Qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">
            My Personel Journey
        </span>

        <div className="Qualification__container container">
            <div className="Qualification__tabs">
                <div className="Qualification__button button--flex">
                    <i className="uil uil-graduation-cap
                    qualification__icon"></i>{" "} Education
                </div>

                <div className="Qualification__button button--flex">
                    <i className="uil uil-briefcase-alt
                    qualification__icon"></i>{" "} Experience
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
