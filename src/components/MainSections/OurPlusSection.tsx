import React from 'react'
import './OurPlusSection.css'
const Illustration = require('../../images/Illustration 2.png')

const OurPlusBlock: React.FC = () => {
  return (
    <div className='container plus-block-container'>
    <section className="plus-block">
      <img src={Illustration} alt="man_show_our_plus"/>
        <div className="plus-block__text">
          <h2 className="plus-block__title">
            We Provide Many Features You Can Use
          </h2>
          <span className="plus-block__light-text light-text"
            >You can explore the features that we provide with fun and have
            their own functions each feature</span>
          <ul className="plus-block__plus-list">
            <li>Powerfull online protection.</li>
            <li>Cashback without borders.</li>
            <li>Personal design</li>
            <li>Work anywhere in the world</li>
          </ul>
      </div>
    </section>
  </div>
  )
}

export default OurPlusBlock;