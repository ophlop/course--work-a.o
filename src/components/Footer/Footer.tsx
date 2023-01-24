import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
const imgLogo = require('../../images/logo.png')

const Footer: React.FC = () => {
  return (
    <footer>
    <div className="container">
      <div className="footer__header">
        <Link target="_blank" to="https://www.neoflex.ru/">
          <img
            className="footer__header__logo"
            src={imgLogo}
            alt="neoflex_logo"
          />
        </Link>
        <div className="footer__header__contacts">
          <Link target="_blank" to="tel: +7 (495) 984 25 13"><h3>+7 (495) 984 25 13</h3></Link>
          <Link target="_blank" to="info@neoflex.ru">info@neoflex.ru</Link>
        </div>
      </div>
      <div className="footer__link-menu">
        <ul className="footer__nav-menu">
          <li><Link className="footer__url-style url-style" target="_blank" to="#">About bank</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Ask Link Question</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Quality of service</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Requisites</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Press center</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Bank career</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Investors</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Analytics</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Business and processes</Link></li>
          <li><Link className="footer__url-style url-style" target="_blank" to="#">Compliance and business ethics</Link></li>
        </ul>
      </div>
      <hr />
      <span className="footer__text">
        We use cookies to personalize our services and improve the user
        experience of our website. Cookies are small files containing
        information about previous visits to Link website. If you do not want to
        use cookies, please change your browser settings
      </span>
    </div>
  </footer>
  )
}

export default Footer;