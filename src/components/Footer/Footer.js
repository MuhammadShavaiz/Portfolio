import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Shavaiz</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/muhammad-shavaiz-sb10/" className="home__social-icon" target='_blank' rel="noreferrer"> 
        <i className='uil uil-linkedin'></i>
        </a>
        <a href="https://github.com/MuhammadShavaiz" className="home__social-icon" target='_blank' rel="noreferrer"> 
        <i className='uil uil-github-alt'></i>
        </a>
            </div>

            <span className='footer__copy'>
            &#169; Muhammad Shavaiz 2024.<br/>All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer
