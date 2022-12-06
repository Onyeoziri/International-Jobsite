import React from 'react'
import { Faq } from '../../components'
import { Features, Header, Hero, Subscribe } from './sections'

function Home() {
  return (
    <div className='homePage'>

      <Hero />
      <Header className='styles'/>
      <Features data-aos="fade-up"/>
      <Subscribe />
      <Faq />

      <h1>This is the Home Page</h1>
    </div>
  )
}

export default Home
