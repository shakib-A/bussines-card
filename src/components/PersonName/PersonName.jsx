import React from 'react'
import './PersonName.css'

const PersonName = () => {
  return (
    <div className="personName">
      <h3 className="personName__full-name">Laura Smith</h3>
      <h5 className='personName__job'>frontend developer</h5>
      <h6 className="personName__add">laurasmith.website</h6>
    </div>
  )
}

export default PersonName