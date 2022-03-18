import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/wf.jpeg'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Guy from './Guy'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Emmanuel Tesauro</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <div className='me'>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.2} />
            <Suspense fallback={null}>
              <Guy />
            </Suspense>
          </Canvas>
        </div>

        <HeaderSocials />

        {/* <div className='me'>{<img src={ME} alt='' />}</div> */}

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
