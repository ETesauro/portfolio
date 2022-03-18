import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/wf.png'
/*import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FallGuys from './FallGuys' */

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Emmanuel Tesauro</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        {/* <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <FallGuys />
          </Suspense>
        </Canvas> */}

        <HeaderSocials />

        <div className='me'>{<img src={ME} alt='' />}</div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
