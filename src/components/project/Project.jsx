import React from 'react'
import './project.css'
import pj1 from '../../assets/th.jpeg'
import pj2 from '../../assets/th.jpeg'
import pj3 from '../../assets/th.jpeg'

export const Project = () => {
  return (
    <section id='project'>
      <h5>My Lastest</h5>
      <h2>Projects</h2>
      <div className="container projectContainer">
      <article className='projectItem'>
          <h3>Happy Book Store</h3>
          <div className="projectItemImage">
            <img src={pj1} alt="" />
          </div>
          <div className="projectItemCta">
          <h5><a href="https://github.com" className='btn' >Github</a></h5>
          <h5><a href="https://github.com" className='btn btn-primary' >Demo</a></h5>
          </div>
        </article>
        <article className='projectItem'>
          <h3>Happy Book Store</h3>
          <div className="projectItemImage">
            <img src={pj2} alt="" />
          </div>
          <div className="projectItemCta">
          <h5><a href="https://github.com" className='btn' >Github</a></h5>
          <h5><a href="https://github.com" className='btn btn-primary' >Demo</a></h5>
          </div>
        </article>
        <article className='projectItem'>
          <h3>Happy Book Store</h3>
          <div className="projectItemImage">
            <img src={pj3} alt="" />
          </div>
          <div className="projectItemCta">
          <h5><a href="https://github.com" className='btn' >Github</a></h5>
          <h5><a href="https://github.com" className='btn btn-primary' >Demo</a></h5>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project
