import './Banner.css'
import { TypingText } from '../TypingText/TypingText'

export const Banner = () => {
    return (
        <section className="banner-container" id="home">
            <TypingText sentence="Hi, I'm Ricardo, a Fullstack Developer"/>
            <br/>
            <a className="btn" href="#contact"><span>Contact Me!</span></a>
        </section>
    )
}