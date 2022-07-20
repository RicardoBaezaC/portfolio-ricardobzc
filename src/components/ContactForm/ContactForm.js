import './ContactForm.css'
import Clouds from '../../assets/img/clouds.png'
import { useState } from 'react'
import axios from 'axios'
import { Alert } from '../Alert/Alert'
import { SocialIcon } from '../SocialIcon/SocialIcon'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'
import facebook from '../../assets/img/facebook.svg'


export const ContactForm = () => {

    const [alertIsVisible, setAlertIsVisible] = useState(false)
    const [alertType, setAlertType] = useState("success")

    const showAlert = (type) => {
        setAlertIsVisible(true)
        setAlertType(type)
    }

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleFormChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('https://server-portfolio-ricardobzc.herokuapp.com/contact', form)
        .then( response => {
            showAlert("success")
        })
        .catch( error => {
            showAlert("failure")
        });
        setForm({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: ""
        })
    }

    return (
        <section className="contact-container" id="contact">
            <div className="contact-container-img">
                <img src={Clouds} alt="clouds"/>
                <div className="footer-icon-container">
                    <SocialIcon name="instagram" image={instagram} url="https://www.instagram.com/ricardobaezac/" />
                    <SocialIcon name="facebook" image={facebook} url="https://web.facebook.com/ricardo.baezacandor.3" />
                    <SocialIcon name="github" image={github} url="https://github.com/RicardoBaezaC" />
                    <SocialIcon name="linkedin" image={linkedin} url="https://www.linkedin.com/in/jos%C3%A9-ricardo-baeza-candor-864a55242/" />
                </div>
            </div>
            <div className="contact-form-container">
                <h2>Get In Touch</h2>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <input name="firstname" placeholder="First Name" type="text" value={form.firstname} onChange={handleFormChange} required/>
                    <input name="lastname" placeholder="Last Name" type="text" value={form.lastname} onChange={handleFormChange} required/>
                    <input name="email" placeholder="Email Address" type="email" value={form.email} onChange={handleFormChange} required/>
                    <input name="phone" placeholder="Phone No." type="tel" value={form.phone} onChange={handleFormChange} max="16" min="10" pattern="^\+{0,1}[0-9]{10,15}"/>
                    <textarea name="message" placeholder="Message" type="text" value={form.message} onChange={handleFormChange} required></textarea>
                    <button type="submit" className="btn"><span>Submit</span></button>
                </form>
            </div>
            {alertIsVisible && <Alert type={alertType} message="Se ha enviado el correo exitosamente" alertIsVisible={alertIsVisible} setAlertIsVisible={setAlertIsVisible}/>}
        </section>
    )
}
