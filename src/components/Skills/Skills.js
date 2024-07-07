import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import MachineLearning from './MachineLearning'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
         <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">
            My Technical Level
        </span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <MachineLearning/>
        </div>
    </section>
  )
}

export default Skills
