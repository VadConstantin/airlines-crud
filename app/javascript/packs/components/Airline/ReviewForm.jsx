import React, {useState} from 'react'
import './airline.css'

const ReviewForm = ({airline}) => {

  return(
    <div className="review-input">

        <h4> Enter Review for {airline.attributes.name}</h4>

      <form action="">
        <div>
          <label htmlFor="review-title">Title of your review</label>
          <input type="text" name="review-title" id="review-title"/>
        </div>

        <div>
          <label htmlFor="review-description">Describe your experience</label>
          <textarea id="review" name="review-description"
            rows="5" cols="33">
          </textarea>
        </div>

        <div>
          <label htmlFor="score">Rate this airline !</label>
          <input type="number" id="score" name="review-score" min="1" max="5" onChange={handleChangeNumber}/>
        </div>

        <button type="submit" className="button-3">Submit review</button>
      </form>
    </div>
  )
}

export default ReviewForm
