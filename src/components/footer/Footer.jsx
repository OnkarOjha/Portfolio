import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Onkar Ojha</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Us</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com"><BsLinkedin/></a>
        <a href="https://www.twitter.com"><BsTwitter/></a>
        <a href="https://www.instagram.com"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Onkar Ojha. All rights reserved.</small>
      </div>
      
    </footer>
  )
}

export default footer