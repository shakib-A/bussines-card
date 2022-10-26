import React from 'react'
import './Card.css'

import PersonImage from './components/PersonImage/PersonImage'
import PersonName from './components/PersonName/PersonName'
import Button from './components/Button/Button'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'

const Card = () => {
  return (
    <main className='main'>
        <PersonImage />
        <PersonName />
        <Button />
        <Info />
        <Footer />
    </main>
  )
}

export default Card 