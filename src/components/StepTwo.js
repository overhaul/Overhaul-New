import React from 'react'
import Radios from './Radios'

const StepTwo = ({ prevStep, nextStep, handleChange, values }) => {
  
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
      <Radios step={values}/>
      <button 
        onClick={ Previous }
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Previous
      </button>
      <button 
        onClick={ Continue }
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Next
      </button>
    </div>
  )
}

export default StepTwo