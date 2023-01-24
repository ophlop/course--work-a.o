import React from 'react'
import './WelcomeSection.css'
import FirstButton from '../../UI/button-first/FirstButton';
const card1 = require('../../images/cardImage1.png')
const card2 = require('../../images/cardImage2.png')
const card3 = require('../../images/cardImage3.png')
const card4 = require('../../images/cardImage4.png')

const WelcomeSection: React.FC = () => {
  return (
    <div className='container'>
      <section className="welcome_block">
          <div className="welcome_block__left-column">
            <h1 className="left-column__title">
              Choose the design you like and apply for card right now
            </h1>
            <FirstButton buttonName={'Choose the card'} buttonLink={'#'}/>
          </div>
          <div className="welcome_block__right-column">
            <img className="right-column__card card" src={card1} alt="credit-card-1"/>
            <img className="right-column__card card" src={card2} alt="credit-card-2"/>
            <img className="right-column__card card" src={card3} alt="credit-card-3"/>
            <img className="right-column__card card" src={card4} alt="credit-card-4"/>
          </div>
        </section>
    </div>
  )
}

export default WelcomeSection;