import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'
import {BiLogoInstagramAlt,BiLogoGithub,BiLogoFacebookCircle} from 'react-icons/bi'

const Footer = () => {
  return (
    <section id='footer'>
        <div className="container footerContainer">
            <h1 className="footerTittle">Ravell Ravindo</h1>
            <ul className="footerList">
                <li>
                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="footerLink">About</Link>
                </li>
                <li>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="footerLink">Skill</Link>
                </li>
                <li>
                    <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="footerLink">Project</Link>
                </li>
                <li>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="footerLink">Contact</Link>
                </li>
            </ul>
            <div className="footerIcon">
                <a href="https://www.instagram.com/ravell05/"><BiLogoInstagramAlt/></a>
                <a href="https://github.com/RavellRavindo/"><BiLogoGithub/></a>
                <a href="https://www.facebook.com/ravell05"><BiLogoFacebookCircle/></a>
            </div>
            <span className="footerCr">
                &#169;2023 Ravell Ravindo | All rights reserved
            </span>
        </div>
    </section>
  )
}

export default Footer