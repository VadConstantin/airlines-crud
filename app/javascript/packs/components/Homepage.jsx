import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="airlines-title-home">Companizz</div>
      <p className="slog">Rate US flying companies</p>
      <div className="airlines-card-container">
        <Link to={"/airlines/"} >
          <button className="button-home">Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
