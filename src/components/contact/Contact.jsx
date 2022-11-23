import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import React from 'react'
import { useRef } from 'react'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6yarvn', 'template_5vviazy', form.current, 'DJDiByOciL2yre5Pk')

    e.target.reset()
  };  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>carlosng1993@gmail.com</h5>
            <a href="mailto:carlosng1993@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+34 618 61 13 21</h5>
            <a href="https://api.whatsapp.com/send?phone=34618611321" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' required />
          <input type="text" placeholder='Your Email required' />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact