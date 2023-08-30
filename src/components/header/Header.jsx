import React from 'react'
import './header.css'
import Type from './Type'

export const Header = () => {
  return (
    <header id='header'>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Ravell Ravindo</h1>
        <Type/>
        <h5 className="text-light">Web Developer</h5>
        <div className="button">
          <a href="https://mail.google.com/mail/u/0/?to=kuanvell@gmail.com&fs=1&tf=cm" className="btn btn-primary"> <h5>Connect With Me</h5></a>
        </div>
      </div>
    </header>
  )
}

export default Header