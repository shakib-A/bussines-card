import React from 'react'
import './Info.css'

const Info = () => {
  return (
    <div className="info">
      <div className="info__article">
        <h3 className="info__heading">About</h3>
        <p className="info__text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      </div>
      <div className="info__article">
        <h3 className="info__heading">Intrests</h3>
        <p className="info__text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </div>
  )
}

export default Info