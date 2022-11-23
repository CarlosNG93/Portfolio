import CTA from './CTA'
import './header.css'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/kisspng-web-development-web-developer-web-design-software-5ae187d4f2c515.1032139415247298129944.png'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Carlos Núñez García</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocial />

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header