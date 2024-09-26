import React from 'react'
import './project.css'
import pj1 from '../../assets/happybirthdaycake3D.jpg'
import pj2 from '../../assets/cubetower3D.jpg'
import pj3 from '../../assets/ASCbookStore.png'

export const Project = () => {
  return (
    <section id='project'>
      <h5>My Lastest</h5>
      <h2>Projects</h2>
      <div className="container projectContainer">
      <article className='projectItem'>
          <h3>HappyBirthdayCake 3D</h3>
          <div className="projectItemImage">
            <img src={pj1} alt="" />
          </div>
          <div className="projectItemCta">
          <h5><a href="https://github.com/RavellRavindo/birthdaycake3d.git" className='btn' >Github</a></h5>
          <h5><a href="https://ravellravindo.github.io/birthdaycake3d/" className='btn btn-primary' >Demo</a></h5>
          </div>
        </article>
        <article className='projectItem'>
          <h3>Cube Tower 3D</h3>
          <div className="projectItemImage">
            <img src={pj2} alt="" />
          </div>
          <div className="projectItemCta">
          <h5><a href="https://github.com/RavellRavindo/cubetower3D.git" className='btn' >Github</a></h5>
          <h5><a href="https://ravellravindo.github.io/cubetower3D/" className='btn btn-primary' >Demo</a></h5>
          </div>
        </article>
        <article className='projectItem'>
          <h3>ASC Book Store</h3>
          <div className="projectItemImage">
            <img src={pj3} alt="" />
          </div>
          <div className="projectItemCta">
          <h5><a href="https://github.com/RavellRavindo/ASCbookStoreJS.git" className='btn' >Github</a></h5>
          <h5><a href="https://ravellravindo.github.io/ASCbookStoreJS/" className='btn btn-primary' >Demo</a></h5>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project
