import React, {useState, useCallback, useEffect} from 'react'
import './airline.css'

const ReviewForm = (props) => {

  const [ formInput, setFormInput ] = useState({})
  const [ isDisable, setIsDisable ] = useState(true)

  const handleChange = useCallback((event) => {
    props.changeForm(event)
    setFormInput(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })

  }, [formInput])

  useEffect(() => {
    if (Object.values(formInput).length > 2 && (Object.values(formInput).every(item => item.length > 0))) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [formInput])

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
          <label htmlFor="review_title">Title of your review</label>
          <input type="text" name="review_title" id="review_title" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="review_description">Describe your experience</label>
          <textarea id="review_description" name="review_description"
            rows="5" cols="33" onChange={handleChange}>
          </textarea>
        </div>

        <div>
          <label htmlFor="score">Rate this airline ! (from 1 to 5)</label>
          <input type="number" id="score" name="review_score" min={1} max={5} onChange={handleChange} onKeyPress={handleKeyPress} />
        </div>

        <button className={isDisable ? "disabled button-3" : "button-3"} type="submit">Submit review</button>
      </form>
    </div>
  )
}

export default ReviewForm
