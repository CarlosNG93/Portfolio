import IMG1 from '../../assets/jay-dkFJST9zZZo-unsplash.jpg'
import IMG2 from '../../assets/alexander-shatov-w-qqwn5O-4I-unsplash.jpg'
import IMG3 from '../../assets/alexander-shatov-niUkImZcSP8-unsplash.jpg'
import IMG4 from '../../assets/tyler-nix-Y1drF0Y3Oe0-unsplash.jpg'
import IMG5 from '../../assets/rupixen-com-Q59HmzK38eQ-unsplash.jpg'
import IMG6 from '../../assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg'
import './portfolio.css'
import React from 'react'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Pokedex</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CarlosNG93/pokedex" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Spotify 2.0 Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CarlosNG93/spotifyClone" className='btn'>Github</a>
            <a href="https://spotify-clone-psi-rose.vercel.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Youtube Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CarlosNG93/youtube_clone" className='btn'>Github</a>
            <a href="https://polite-lollipop-6f4273.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Fitness Exercises App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CarlosNG93/fitness" className='btn'>Github</a>
            <a href="https://fitness-blush.vercel.app/exercise/0001" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>ECommerce App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CarlosNG93/ecommerce" className='btn'>Github</a>
            <a href="https://ecommerce-charli93.vercel.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Admin Dashboard App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/CarlosNG93/dashboard" className='btn'>Github</a>
            <a href="https://dashboard-neon-alpha.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio