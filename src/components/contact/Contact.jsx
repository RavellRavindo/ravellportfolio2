import React from 'react'
import './contact.css'
import {BiLogoWhatsapp,BiLogoMessenger} from 'react-icons/bi'
import {TbArrowRight} from 'react-icons/tb'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mcs32dd', 'template_369l0fv', form.current, 'TosQ-r0O46iodDk45')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
  };

  return (
   <section id='contact'>
    <h5>You can</h5>
    <h2>Talk to Me</h2>

    <div className="container contactContainer">
      <div className="contactOptions">
        <article className="contactOption">
          <BiLogoWhatsapp className='contactIcon'/>
          <h4>Whatsapp</h4>
          <h5>081373387170</h5>
          <a href="https://wa.me/6281373387170">Text Me <TbArrowRight/></a>
        </article>
        <article className="contactOption">
          <BiLogoMessenger className='contactIcon'/>
          <h4>Messenger</h4>
          <h5>Ravell Ravindo</h5>
          <a href="https://m.me/ravell05">Text Me <TbArrowRight/></a>
        </article>
        <article className="contactOption">
          <MdEmail className='contactIcon'/>
          <h4>Email</h4>
          <h5>kuanvell@gmail.com</h5>
          <a href="https://mail.google.com/mail/u/0/?to=kuanvell@gmail.com&fs=1&tf=cm">Text Me <TbArrowRight/></a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Insert your name' required />
        <input type="text" name="email" placeholder='Insert your email' required />
        <textarea name="message" rows="7" placeholder='Write your message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Massage </button>
      </form>
    </div>
   </section>
  )
}

export default Contact