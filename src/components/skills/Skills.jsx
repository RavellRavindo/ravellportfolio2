import React from 'react'
import './skills.css'
import {BiLogoHtml5,BiLogoCss3,BiLogoBootstrap,BiLogoJavascript,BiLogoReact,
  BiLogoMongodb,BiLogoNodejs,BiLogoVisualStudio,BiLogoGithub} from 'react-icons/bi'
import {TbBrandNextjs,TbBrandLaravel} from 'react-icons/tb'
import {SiInsomnia} from 'react-icons/si'

export const Skills = () => {
  return (
    <section id='skills'>
      <h5>My</h5>
      <h2>Skills</h2>

      <div className="container mySkillContainer">
        <div className="mySkillfrontend">
          <h3>Frontend</h3>
          <div className="mySkillContent">
            <article className='mySkill'> 
              <h1><BiLogoHtml5/></h1>
              <h4>HTML</h4>
            </article>
            <article className='mySkill'>
              <h1><BiLogoCss3/></h1> 
              <h4>CSS</h4>
            </article>
            <article className='mySkill'> 
              <h1><BiLogoBootstrap/></h1>
              <h4>Bootstrap</h4>
            </article>
            <article className='mySkill'> 
              <h1><BiLogoJavascript/></h1>
              <h4>Javascript</h4>
            </article>
            <article className='mySkill'> 
              <h1><BiLogoReact/></h1>
              <h4>ReactJS</h4>
            </article>
            <article className='mySkill'> 
              <h1><TbBrandNextjs/></h1>
              <h4>NextJS</h4>
            </article>
          </div>
        </div>

        <div className="mySkillBackend">
          <h3>Backend</h3>
          <div className="mySkillContent">
            <article className='mySkill'> 
              <h1><BiLogoMongodb/></h1>
              <h4>MongoDB</h4>
            </article>
            <article className='mySkill'> 
              <h1><TbBrandLaravel/></h1>
              <h4>Laravel</h4>
            </article>
            <article className='mySkill'>
              <h1><BiLogoNodejs/></h1> 
              <h4>NodeJS</h4>
            </article>
          </div>
        </div>

        <div className="mySkillTools">
          <h3>Tools</h3>
          <div className="mySkillContent">
            <article className='mySkill'> 
            <h1><BiLogoVisualStudio/></h1>
            <h4>VsCode</h4>
          </article>
          <article className='mySkill'> 
            <h1><BiLogoGithub/></h1>
            <h4>Github</h4>
          </article>
          <article className='mySkill'> 
            <h1><SiInsomnia/></h1>
            <h4>Insomnia</h4>
          </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills