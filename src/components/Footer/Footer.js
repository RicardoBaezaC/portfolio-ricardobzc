import './Footer.css'
import { SocialIcon } from '../SocialIcon/SocialIcon';
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import facebook from '../../assets/img/facebook.svg'

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo-container">
                <h2>RicardoBzC</h2>
            </div>
            <div className="footer-description-container">
                <div className="footer-icon-container">
                    <SocialIcon name="instagram" image={instagram} url="https://www.instagram.com/ricardobaezac/" />
                    <SocialIcon name="facebook" image={facebook} url="https://web.facebook.com/ricardo.baezacandor.3" />
                    <SocialIcon name="github" image={github} url="https://github.com/RicardoBaezaC" />
                    <SocialIcon name="linkedin" image={linkedin} url="https://www.linkedin.com/in/jos%C3%A9-ricardo-baeza-candor-864a55242/" />
                </div>
                <div className="footer-description">
                    <p>Copyright 2022. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}