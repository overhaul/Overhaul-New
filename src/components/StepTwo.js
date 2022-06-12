import React from 'react'
import Radios from './Radios'

const StepTwo = ({ prevStep, nextStep, handleChange, slide, radios }) => {

  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
      <h1>Slide: A</h1>
      <Radios step={ slide }/>
      <div className="buttons">
        <button 
          onClick={ Previous }
          type="none"
        >
          Previous
        </button>
        <button 
          onClick={ Continue }
          type="none"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default StepTwo