import React from 'react';
import { Link } from 'react-router-dom';
import './FirstButton.css'
import { buttonProps } from '../../types/types'


const FirstButton: React.FC<buttonProps> = (btnProps: buttonProps) => {

  return (
    <button className="header__btn btn-main">
        <Link className="btn__url-style url-style" target="_blank" to={btnProps.buttonLink}>{btnProps.buttonName}</Link>
    </button>
  )
}

export default FirstButton;