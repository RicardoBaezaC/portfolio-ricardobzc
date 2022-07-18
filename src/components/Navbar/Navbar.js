import './Navbar.css'
import { useState, useEffect } from 'react'

export const Navbar = () => {   

    const [isVisible, setIsVisible] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleNavbar = () => {
        setIsVisible(prevVisibility => !prevVisibility)
    }

    const onScroll = () => {
        if(window.scrollY > 70){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    return(
        <nav className={isScrolled ? "navbar-container scrolled" : "navbar-container"}>
            <div className="navbar-logo-container">
                <a href="#home">RicardoBzC</a>
                <button className="navbar-btn-mobile" aria-controls="primary-navigation" aria-expanded={isVisible} onClick={toggleNavbar}>{!isVisible ? "≡" : "×"}</button>
            </div>
            <ul className="navbar" id="primary-navigation" data-visible={isVisible}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}