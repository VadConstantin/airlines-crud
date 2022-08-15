import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './airline.css'


const url = "/api/v1/airlines.json"

const Airline = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [airlines, setAirlines ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAirlines(data.data))
  }, [ airlines.length])

  const airline = airlines?.filter(element => element.attributes.slug === params.slug)[0]

  return(
    airlines.length > 0 && (
    <div className="show-page-container">
      <button className="button-2" onClick={() => navigate(-1)}> Go back</button>
      <div className="show-card">
          <h1> {airline.attributes.name}</h1>
          <img src={airline.attributes.image_url} className="airlines-show-card-img" />
          <div className="average_score">
            <p>Average score {airline.attributes.average_score}/5</p>
          </div>
      </div>
    </div>
    )
  )
}

export default Airline
