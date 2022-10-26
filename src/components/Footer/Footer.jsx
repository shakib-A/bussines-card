import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__social">
        <li className="footer__item" title='twitter'><a href="#" className="footer__link"><i className="footer__icon fa-brands fa-square-twitter"></i></a></li>
        <li className="footer__item" title='facebook'><a href="#" className="footer__link"><i className="footer__icon fa-brands fa-square-facebook"></i></a></li>
        <li className="footer__item" title='instagram'><a href="#" className="footer__link"><i className="footer__icon fa-brands fa-square-instagram"></i></a></li>
        <li className="footer__item" title='Github'><a href="#" className="footer__link"><i className="footer__icon fa-brands fa-square-github"></i></a></li>
      </ul>
    </div>
  )
}

export default Footer