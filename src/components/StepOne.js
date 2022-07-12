import React from 'react'

const StepOne = ({ nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div>
      <h1>Gut Check</h1>
      <div className="gutcheck-container">
        <div className="gutcheck-item">
          <input type="text" 
            placeholder={( values.name === '' ? values.name : "Your Name" )}
            label="Name"
            htmlFor="name"
            name="Name"
            value={ values.name }
            onChange={ handleChange('name') }
            defaultValue={ values.name }
            autoComplete="name"
          />
        </div>
        <div className="buttons">
          <button 
            onClick={ Continue }
            type="none"
            variant="contained"
            color="primary"
            className="first"
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepOne