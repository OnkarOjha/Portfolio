import React from 'react'
import './about.css'
import ME  from '../../assets/me_about.png'
import {FaAward} from 'react-icons/fa'
import {SiCodeproject} from 'react-icons/si'
import {GiProgression} from 'react-icons/gi'
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>VP-Growth @Skillvalley</small>
            </article>

            <article className='about__card'>
              <SiCodeproject className='about__icon'/>
              <h5>Projects</h5>
              <small>11+ Completed!</small>
            </article>

            <article className='about__card'>
              <GiProgression className='about__icon'/>
              <h5>DSA</h5>
              <small>200+ questions on Leetcode</small>
            </article>
          </div>
          <p>In publishing and graphic design,
             Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of
              a document or a typeface without relying on meaningful content. 
            Lorem ipsum may be used as a placeholder before the final copy is available.
             </p>

             <a href="#contact" className='btn btn-primary'>
                Let's Talk
              </a>


        </div>
      </div>
    </section>
  )
}

export default about