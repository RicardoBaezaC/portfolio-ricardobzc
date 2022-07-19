import './ContactForm.css'
import Clouds from '../../assets/img/clouds.png'
import { useState } from 'react'
import axios from 'axios'


export const ContactForm = () => {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleFormChange = (e) => {
        console.log(e.target.name, e.target.value, form[e.target.name])
        setForm({...form,[e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('https://server-portfolio-ricardobzc.herokuapp.com/contact', form)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
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
            </div>
            <div className="contact-form-container">
                <h2>Get In Touch</h2>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <input name="firstname" placeholder="First Name" type="text" value={form.firstname} onChange={handleFormChange} required/>
                    <input name="lastname" placeholder="Last Name" type="text" value={form.lastname} onChange={handleFormChange} required/>
                    <input name="email" placeholder="Email Address" type="email" value={form.email} onChange={handleFormChange} required/>
                    <input name="phone" placeholder="Phone No." type="phone" value={form.phone} onChange={handleFormChange} />
                    <textarea name="message" placeholder="Message" type="text" value={form.message} onChange={handleFormChange} required></textarea>
                    <button type="submit" className="btn"><span>Submit</span></button>
                </form>
            </div>
        </section>
    )
}
