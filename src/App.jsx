import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Project from './components/project/Project'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />

    </>
  )
}

export default App
