import './About.css'
import CV from '../../assets/doc/CV.pdf'
import Photo from '../../assets/img/my-photo.jpeg'

export const About = () => {
  return (
    <section className="about-container" id="about">
        <div className="about-description-container">
            <div className='about-description'>
                <h1>José Ricardo Baeza Candor</h1>
                <h3>Computer Systems Engineer</h3>
                <p>
                    My name is José Ricardo Baeza Candor, I am 23 years old, 
                    I just graduated from the Computer Systems Engineering career 
                    with a specialization on Data Science at the Tecnológico Nacional de México Mexico Campus Colima,
                    I am passionate about programming, mathematics and music
                    Currently I am working at Tata Consultancy Services
                </p>
            </div>
            <a className="btn black" href={CV} target="_blank" rel="noopener noreferrer"><span>Download CV</span></a>
        </div>
        <div className="about-photo-container">
            <img className="about-photo" src={Photo} alt="me-with-my-ferret"/>
        </div>
    </section>
  )
}
