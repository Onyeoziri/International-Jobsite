import React from 'react'
import hero from '../../../../assets/hero.jpg'
import './hero.scss'

function Hero() {
  return (
    <div className='hero'>
        <img src={hero} alt='Img' className='loginImg'/>
        <h1>Making Your Dreams A Reality</h1>
    </div>
  )
}

export default Hero
