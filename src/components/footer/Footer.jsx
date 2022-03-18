import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#/' className='footer__logo'>
        EMMANUEL TESAURO
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#/'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experiences</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://linkedin.com'>
          <BsLinkedin />
        </a>
        <a href='https://github.com'>
          <FaGithub />
        </a>
        <a href='https://instagram.com'>
          <FaInstagram />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
