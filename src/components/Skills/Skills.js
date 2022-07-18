import './Skills.css'

import CSS from '../../assets/img/css.svg'
import JS from '../../assets/img/js.svg'
import HTML from '../../assets/img/html.svg'
import Rea from '../../assets/img/react.svg'
import Node from '../../assets/img/nodejs.svg'
import SQL from '../../assets/img/sql.svg'
import NOSQL from '../../assets/img/nosql.svg'
import Java from '../../assets/img/java.svg'
import Py from '../../assets/img/py.svg'
import PHP from '../../assets/img/php.svg'

import { useEffect, useState, useRef } from 'react'

export const Skills = () => {

  const background = useRef(null)
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const [lastScrolled, setLastScrolled] = useState(0)

  useEffect(() => {
    console.log(background.current.getBoundingClientRect().width);
    if (background.current.getBoundingClientRect().width > 800) {
      const mouseMove = (e) => {
        setX(e.clientX)
        setY(e.pageY - 1420)
      }

      const scrollMove = (e) => {
        if (lastScrolled !== window.scrollY) {
          setY(prevY => prevY - window.scrollY)
          setLastScrolled(window.scrollY)
          setY(prevY => prevY + window.scrollY)
        }
      }

      background.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(42,42,42,1) 0%, rgba(250,250,250,0.7816920518207283) 0%, rgba(0,0,0,1) 10%)`;

      background.current.addEventListener('mousemove', mouseMove)
      window.addEventListener('onScroll', scrollMove)

      return () => {
        background.current.removeEventListener('mousemove', mouseMove)
        window.removeEventListener('onScroll', scrollMove)
      }
    }

  }, [x, y, lastScrolled])

  return (
    <section ref={background} style={{ background: "background: rgb(42,42,42)" }} className="skills-content-container" id="skills">
      <h2>Technologies</h2>
      <div className="skills-container">
        <img src={JS} alt="logo-js" />
        <img src={HTML} alt="logo-html" />
        <img src={CSS} alt="logo-css" />
        <img src={Node} alt="logo-nodejs" />
        <img src={Rea} alt="logo-reactjs" />
        <img src={NOSQL} alt="logo-mongodb" />
        <img src={SQL} alt="logo-mysql" />
        <img src={Java} alt="logo-java" />
        <img src={Py} alt="logo-python" />
        <img src={PHP} alt="logo-php" />
      </div>
    </section>
  )
}
