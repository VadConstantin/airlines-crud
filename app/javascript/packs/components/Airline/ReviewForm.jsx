import React, {useCallback} from 'react'
import './airline.css'

const ReviewForm = (props) => {

  const handleChange = useCallback((event) => {
    props.changeForm(event)
  }, [])

  const submitForm = (event) => {
    event.preventDefault()
    props.submitForm(event)
  }


  const handleKeyPress = (event) => {
    if (!/[1-5]/.test(event.key)) {
      event.preventDefault();
    }
  }


  return(
    <div className="review-input">

        <h4> Enter Review for {props.airline.attributes.name}</h4>

      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="review-title">Title of your review</label>
          <input type="text" name="review-title" id="review-title" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="review-description">Describe your experience</label>
          <textarea id="review" name="review-description"
            rows="5" cols="33" onChange={handleChange}>
          </textarea>
        </div>

        <div>
          <label htmlFor="score">Rate this airline ! (from 1 to 5)</label>
          <input type="number" id="score" name="review-score" min={1} max={5} onChange={handleChange} onKeyPress={handleKeyPress} />
        </div>

        <button type="submit" className="button-3">Submit review</button>
      </form>
    </div>
  )
}

export default ReviewForm
