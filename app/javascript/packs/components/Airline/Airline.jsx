import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './airline.css'


const url = "/api/v1/airlines.json"

const Airline = () => {

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
      <div className="show-card">
          <h1> {airline.attributes.name}</h1>
      </div>
    </div>
    )
  )
}

export default Airline
