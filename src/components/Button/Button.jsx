import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <div className="button">
      <button className="button__mail">
        <a href="#" className="button__link">
          <i className="button__icon  fa-solid fa-envelope"></i>
          <p className="button__text">Email</p>
        </a>
      </button>
      <button className="button__linkedin button--blue">
        <a href="#" className='button__link'>
          <i className="button__icon  fa-brands fa-linkedin"></i>
          <p className="button__text">LinkedIn</p>
        </a>
      </button>
    </div>
  )
}

export default Button