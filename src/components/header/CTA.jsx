import CV from '../../assets/CNG2.pdf'
import React from 'react'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>

        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    

    </div>
  )
}

export default CTA