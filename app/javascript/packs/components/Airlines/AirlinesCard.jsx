import React from 'react'
import './airlines.css'

const AirlinesCard = ({airline}) => {
  return(
    <div className="airlines-card">
      <div className="airlines-card-name">{airline.attributes.name}</div>
    </div>
  )
}

export default AirlinesCard
