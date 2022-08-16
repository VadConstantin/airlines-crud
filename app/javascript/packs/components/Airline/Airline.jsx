import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './airline.css'
import ReviewForm from './ReviewForm'


const url = "/api/v1/airlines.json"
const reviewsUrl = "/api/v1/reviews"

const Airline = () => {

  const navigate = useNavigate()
  const params = useParams()

  const [ airlines, setAirlines ] = useState([])
  const [ reviews, setReviews ] = useState([])
  const [ isVisible, setIsVisible ] = useState(false)
  const [ newReview, setNewReview ] = useState({})

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setAirlines(data.data)
      setReviews(data.included);})
  }, [ airlines.length])

  const airline = airlines?.filter(element => element?.attributes.slug === params.slug)[0]
  const airlineReviews = reviews?.filter(element => element?.attributes.airline_id === parseInt(airline.id))

  const handleClick = () => {
    setIsVisible(prev => !prev)
  }

  const changeForm = useCallback((e) => {
    setNewReview((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })}, [newReview])

  const submitForm = (e) => {
    e.preventDefault()
    const airline_id = airline?.id
    const submitOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        title: newReview.review_title,
        description: newReview.review_description,
        score: newReview.review_score,
        airline_id: airline_id
      }),
    }

    fetch(reviewsUrl, submitOptions)
    .then(res => res.json())
    // .then(data => console.log(data.data))
    .then(data => {
      setReviews((prev) => {
      return [...prev, data?.data]
    })})
  }

  // console.log(reviews);
  console.log("airline Component renders");

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
            {isVisible && <ReviewForm
              airline={airline}
              changeForm = {(e) => changeForm(e)}
              submitForm = {(e) => submitForm(e)}
              />}
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
