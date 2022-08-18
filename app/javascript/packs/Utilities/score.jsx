import React from 'react'
import star from 'images/star.png'
import './score.css'

const scoreStars = (scor) => {
  const score = parseInt(scor)
  if (score >= 0 && score < 1) {
    return (
      <div className="stars-container">
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
      </div>
    )
  } else if (score >= 1 && score < 2){
    return (
      <div className="stars-container">
        <img className="star-full" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
      </div>
    )
  } else if (score >= 2 && score < 3){
    return (
      <div className="stars-container">
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
      </div>
    )
  } else if (score >= 3 && score < 4){
    return (
      <div className="stars-container">
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-empty" src={star} />
        <img className="star-empty" src={star} />
      </div>
    )
  } else if (score >= 4 && score < 4.5){
    return (
      <div className="stars-container">
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-empty" src={star} />
      </div>
    )
  } else {
    return (
      <div className="stars-container">
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
        <img className="star-full" src={star} />
      </div>
    )
  }
}

export default scoreStars
