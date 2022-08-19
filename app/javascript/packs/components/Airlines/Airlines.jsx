import React, { useState, useEffetc, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AirlinesCard from './AirlinesCard'
import './airlines.css'

const Airlines = () => {

  const navigate = useNavigate()
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
    <div>
      <button className="button-back-index" onClick={() => navigate(-1)}>Home</button>
      <div className="index-container">
        <div className="airlines-title">All Companies</div>
        <div className="airlines-card-container">
          {airlines?.map((airline) => {
            return (
              <Link to={"/airlines/" + airline.attributes.slug} key={airline.id} >
                <div> <AirlinesCard airline={airline} /></div>
              </Link>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default Airlines
