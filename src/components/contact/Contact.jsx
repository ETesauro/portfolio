import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiTelegramLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_pz9feen', 'template_xmynsha', form.current, 'NGZuIbELwQZAS7XlQ').then(
      result => {
        alert(result.text)
      },
      error => {
        console.log(error.text)
      }
    )

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-image' />
            <h4>Email</h4>
            <h5>emmanuel.tesauro@gmail.com</h5>
            <a href='mailto:emmanuel.tesauro@gmail.com' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <RiTelegramLine className='contact__option-image' />
            <h4>Telegram</h4>
            <h5>@emmanuel_tesauro</h5>
            <a href='https://t.me/emmanuel_tesauro' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-image' />
            <h4>WhatsApp</h4>
            <h5>+39 123456789</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+39123456789'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
