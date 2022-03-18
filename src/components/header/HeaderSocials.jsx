import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com/in/emmanuel-tesauro-014244175/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/ETesauro' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://www.instagram.com/emmanuel_tesauro/' target='_blank'>
        <FaInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials
