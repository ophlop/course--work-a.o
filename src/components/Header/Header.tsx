import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import './HamburgerStyles.css'
import FirstButton from '../../UI/button-first/FirstButton';


const Header: React.FC = () => {


  return (
    <div className='container'>
      <header>
      <h1 className="header__title">
        <Link to="/">NeoBank</Link>
      </h1>
        <ul className="header__nav-menu">
          <li><Link className="header__url-style url-style" to="/loan">Credit card</Link></li>
          <li><Link className="header__url-style url-style" to="#">Product</Link></li>
          <li><Link className="header__url-style url-style" to="#">Account</Link></li>
          <li><Link className="header__url-style url-style" to="#">Resources</Link></li>
        </ul>
        <FirstButton buttonName={'Online Bank'} buttonLink={'#'}/>
        {/* <!-- hamburge menu for mobile version --> */}
        <div className="hamburger-menu">
          <input id="menu_toggle" type="checkbox" />
          <label className="hamburger-menu__menu_btn"  htmlFor="menu_toggle">
            <span></span>
          </label>

          <ul className="hamburger-menu__menu_box">
            <li><Link className="menu_box__menu_item" to="/loan">Credit card</Link></li>
            <li><Link className="menu_box__menu_item" to="#">Product</Link></li>
            <li><Link className="menu_box__menu_item" to="#">Account</Link></li>
            <li><Link className="menu_box__menu_item" to="#">Resources</Link></li>
          </ul>
        </div>
        {/* <!-- hamburge menu for mobile version --> */}
      </header>
    </div>
  )
}

export default Header;