import React from 'react'

const StepOne = ({ nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div>
      <h1>Name:</h1>
        <div className="container">
          <div className="item">
            <input type="text" 
              placeholder="Name"
              label="Name"
              htmlFor="name"
              name="Name"
              value={values.name}
              onChange={handleChange('name')}
              defaultValue={values.name}
              autoComplete="name"
            />
          </div>
        <button 
          onClick={ Continue }
          type="none"
          variant="contained"
          color="primary"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default StepOne