import React from 'react'
// import './MainStyles.css'
// import map from '../../images/Huge Global.png'

const MapSection: React.FC = () => {
  return (
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
        // src={map}
        alt="minimalistic-map"
      />
    </div>
  </section>
  )
}

export default MapSection;