import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import {HiOutlineMenuAlt3} from 'react-icons/hi'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  return (

    <nav className="navbar container">
      <div className="logo">
          <h1><span>R</span>avell</h1>
      </div>
      
      <div className="navList">
          <Link activeClass='active' to='header' spy={true} smooth={true} offset={-50} duration={500} className="navListItem">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="navListItem">About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="navListItem">Skill</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="navListItem">Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="navListItem">Contact</Link>
      </div>
    <h1 className="burgerMenu" onClick={() => setShowMenu(!showMenu)}>
      {<HiOutlineMenuAlt3/>}
    </h1>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='header' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skill</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Project</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
    
  )
}

export default Navbar