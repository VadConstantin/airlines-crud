import React, { useState, useEffetc, useEffect } from 'react'
import AirlinesCard from './AirlinesCard'
import './airlines.css'

const Airlines = () => {

  const [ airlines, setAirlines ] = useState([])
  const url = "/api/v1/airlines.json"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setAirlines(data.data)
      console.log(data.data)})
  }, [airlines.length])


  return (
    <div className="index-container">
      <div>I am the Airlines #INDEX</div>
      {airlines?.map((airline) => {
        return (
          <div key={airline.id}> <AirlinesCard airline={airline} /></div>)
      })}
    </div>
  )
}

export default Airlines
