import React from 'react'
import Radios from './Radios'

const StepTwo = ({ prevStep, nextStep, handleChange, slide }) => {
  
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
      <h3>the inputs</h3>
      <Radios step={slide}/>
      <button 
        onClick={ Previous }
        type="submit"
      >
        Previous
      </button>
      <button 
        onClick={ Continue }
        type="submit"
      >
        Next
      </button>
    </div>
  )
}

export default StepTwo