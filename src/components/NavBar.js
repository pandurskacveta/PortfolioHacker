import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react"
import logo from '../assets/img/logoTransparent.svg'
import navBar1 from '../assets/img/search.svg'
import navBar2 from '../assets/img/facebook-logo.svg'
import navBar3 from '../assets/img/linked.svg'


 const NavBar = () => {

    // to detect what link is active, initial one is home 
    const [activeLink, setActiveLink] = useState('home')
    // when user scrolls to be able to take action
    const [scrolled, setScrolled] = useState(false)
    
    // determines whether it is scrolled or not
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // updates the active link
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    // useEffects gets triggered when the user scrolls
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    // return the component
    return (
        <Navbar expand="lg" className={ scrolled ? "scrolled" : ""}> 
        <Container>
          <Navbar.Brand href="#home">
            <img src = {logo} alt="Logo" /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link> 
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>MY SKILLS</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>MY PROJECTS</Nav.Link>
              <Nav.Link href="#QuotesSection" className={activeLink === 'QuotesSection' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('QuotesSection')}>QUOTES</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://mail.google.com/mail/u/0/#inbox"><img src={navBar1} alt=""></img></a>
                    <a href="https://www.facebook.com/"><img src={navBar2} alt=""></img></a>
                    <a href="https://www.linkedin.com/feed/"><img src={navBar3} alt=""></img></a>
                </div>
                <button><Nav.Link href="#connect" className={`vvd ${activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}`} onClick={() => onUpdateActiveLink('connect')}>CONTACT ME!</Nav.Link> </button>
                
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

// export the component
export default NavBar