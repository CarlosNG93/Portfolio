import './about.css'
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/8c30b779-bf5c-451d-8039-b17b3a9f833d.jpg'
import React from 'react'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ year Working </small>
              </article>
            
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>+10 Completed </small>
              </article>
            </div>
            <p>
              I'm a Fullstack Developer.I have solid knowledge of html, css and javascript, as well as NodeJS and React frameworks (although this is a library). At the Backend part, I have developed the projects with NodeJS, express and MySQL. At the Frontend part, I  have developed them with React (Hooks, Redux, router-DOM, HOC) and I have done the tests with Jest and Cypress respectively.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About