import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/wf.png'
import IMG2 from '../../assets/wf.png'
import IMG3 from '../../assets/wf.png'
import IMG4 from '../../assets/wf.png'
import IMG5 from '../../assets/wf.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Harmony',
    github: '',
    demo: '',
  },
  {
    id: 2,
    image: IMG2,
    title: 'AI Car',
    github: '',
    demo: '',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Planty',
    github: '',
    demo: '',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Three.js 3D Model Test',
    github: '',
    demo: '',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Three.js Portfolio',
    github: '',
    demo: '',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt='' />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-CTA'>
                <a href={github} className='btn' target='_blank' rel='noreferrer'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
