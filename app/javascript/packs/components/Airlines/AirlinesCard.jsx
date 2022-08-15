import React from 'react'
import './airlines.css'

const AirlinesCard = ({airline}) => {
  return(
    <div className="airlines-card">
      <div className="airlines-card-name">{airline.attributes.name}</div>
      <img src={airline.attributes.image_url} className="airlines-card-img"/>
      {/* <p> {airline.attributes.average_score}</p> */}
    </div>
  )
}

export default AirlinesCard
