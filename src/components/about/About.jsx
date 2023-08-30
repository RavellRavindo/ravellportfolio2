import React from 'react'
import './about.css'
import Me from '../../assets/Foto2.jpeg'
import CTA from './CTA'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container aboutContainer">
        <div className="aboutContent">
          <h1>I'm Ravell and I'm a <span>Binusian</span></h1>
          <p>
          People usually call me Ravell, i'm majored in computer science and my specialization is interactive multimedia. My current GPA is 3.05, I'm a creative person and I'm interested in learning new things. I believe I am a sociable person so it is 
          easy to work in a team. If you want to know more about me please download the CV below
          </p>
          <CTA></CTA>
        </div>
        <div className="aboutMe">
          <div className="aboutMe-img">
            <img src={Me} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About