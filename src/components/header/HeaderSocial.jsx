import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import React from 'react'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com/in/carlos-núñez-garcía-a66299172" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/CarlosNG93" target="_blank"><FaGithub/></a>
        
    </div>
  )
}

export default HeaderSocial