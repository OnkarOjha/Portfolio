import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lreifhb', 'template_3aewspm', form.current, 'TnIbbgFn1yVOQyQwd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>onkarojha17082001@gmail.com</h5>
            <a href="mailto:onkarojha17082001@gmail.com" target='_blank'>Send A Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8340667072</h5>
            <a href="https://api.whatsapp.com/send?phone=918340667072" target='_blank'>Send A Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required></input>
          <input type="email" name='email' placeholder='Your Email' required></input>
          <textarea name="message"  rows="/" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>
      </div>
    </section>
  )
}

export default Contact