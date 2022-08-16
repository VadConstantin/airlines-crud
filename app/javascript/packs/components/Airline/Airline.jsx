import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './airline.css'
import ReviewForm from './ReviewForm'


const url = "/api/v1/airlines.json"

const Airline = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [ airlines, setAirlines ] = useState([])
  const [ reviews, setReviews ] = useState([])
  const [ isVisible, setIsVisible ] = useState(false)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setAirlines(data.data)
      setReviews(data.included);})
  }, [ airlines.length])

  const handleClick = () => {
    setIsVisible(prev => !prev)
  }

  const airline = airlines?.filter(element => element.attributes.slug === params.slug)[0]
  const airlineReviews = reviews?.filter(element => element.attributes.airline_id === parseInt(airline.id))

  const min = 1;
  const max = 5;

  const handleChangeNumber = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
  };

  return(
    airlines.length > 0 && (
    <div className="show-page-container">
      <button className="button-2" onClick={() => navigate(-1)}> Go back</button>
        {/* <Link to={"/airlines"} className="button-2"> Go back </Link> */}
      <div className="display-flex-show">
        <div className="show-card">
            <h1> {airline.attributes.name}</h1>
            <img src={airline.attributes.image_url} className="airlines-show-card-img" />
            <div className="average_score">
              <p>Average score {airline.attributes.average_score}/5</p>
            </div>
        </div>

        <div className="show-reviews-card">
          <h1>Reviews</h1>
          <button className="add-review-button" onClick={handleClick}> + </button>

          <div className="reviews-display-flex">
            {isVisible && <ReviewForm airline={airline}/>}
            {airlineReviews?.map(review => {
              return (
                <div className="review-item" key={review.id}>
                  <div className="title-score-container">
                    <h4> {review.attributes.title} </h4>
                    <h4> {review.attributes.score}/5</h4>
                  </div>
                  <p className="review-description"> {review.attributes.description} </p>
                </div>
              )
            })}
          </div>

        </div>

      </div>

    </div>
    )
  )
}

export default Airline
