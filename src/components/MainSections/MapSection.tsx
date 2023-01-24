import React from 'react'
import './MapSection.css'
const map = require('../../images/Huge Global.png')

const MapSection: React.FC = () => {
  return (
    <div className='container'>
    <section className="map">
    <div className="map__header">
      <h3 className="map__title">
        You can use our services anywhere in the world
      </h3>
      <p className="map__subtitle light-text">
        Withdraw and transfer money online through our application
      </p>
    </div>
    <div className="map__map-block">
      <img
        className="map-img"
        src={map}
        alt="minimalistic-map"
      />
    </div>
  </section>
  </div>
  )
}

export default MapSection;