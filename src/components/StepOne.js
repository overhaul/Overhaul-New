import React from 'react'

const StepOne = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
      <div>
        <h1>Name:</h1>
        <form>
          <div className="container">
            <div className="item">
              <input type="text" 
                placeholder="Name"
                label="Name"
                onChange={handleChange('name')}
                defaultValue={values.name}
                autoComplete="name"
              />
            </div>
          <button 
            onClick={ Continue }
            type="submit"
            variant="contained"
            color="primary"
          >
            Next
          </button>
          </div>
        </form>
      </div>
  )
}

export default StepOne