import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project_1.png'
import IMG2 from '../../assets/project_2.png'
import IMG3 from '../../assets/project_3.png'
import IMG4 from '../../assets/project_4.png'
import IMG5 from '../../assets/project_5.png'
import IMG6 from '../../assets/project_6.png'


const data=[
  {
    id:1,
    image: IMG2,
    title: 'IMdB Clone using React JS',
    github: 'https://github.com/OnkarOjha/Imdb-clone-using-reactjs',
    demo : 'https://imdb-clone-reactjs.netlify.app/'
    
  },
  {
    id:2,
    image: IMG1,
    title: 'Instagram Clone using React JS',
    github: 'https://github.com/OnkarOjha/instagram_clone',
    demo : 'https://github.com/OnkarOjha/instagram_clone'
    
  },

  {
    id:3,
    image: IMG3,
    title: 'Chat Application using React JS',
    github: 'https://github.com/OnkarOjha/ChatAPP_ReactJS',
    demo : 'https://onkarchatappreactjs.netlify.app/'
    
  },

  {
    id:4,
    image: IMG4,
    title: 'Certificate Generator',
    github: 'https://github.com/OnkarOjha/certificate-generator',
    demo : 'https://certificategen.netlify.app/'
    
  },

  {
    id:5,
    image: IMG5,
    title: 'Chrome Extension',
    github: 'https://github.com/OnkarOjha/chrome_extension_jokes_generator',
    demo : 'https://github.com/OnkarOjha/chrome_extension_jokes_generator'
    
  },

  {
    id:6,
    image: IMG6,
    title: 'Weather App',
    github: 'https://github.com/OnkarOjha/Weather_App',
    demo : 'https://onkar-web.000webhostapp.com/'
    
  }

]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio__container'>
      {
        data.map(({id, image, title , github, demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}></img>
            </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
           </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default portfolio