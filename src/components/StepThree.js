import React, {useState, useRef} from 'react'
// import Radios from './Radios'

const StepThree = ({ prevStep, nextStep, handleChange, slide, values, radios }) => {

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const [loading, setLoading] = useState(false)

  return (
    <div>
      <h3>the end</h3>
      <p>{ values.name }</p>
      { radios }
      <input 
            type="hidden"
            placeholder="Name"
            label="Name"
            htmlFor="name"
            name="Name"
            value={ values.name }
            autoComplete="name"
            />
      {/* <Radios step={slide}/> */}
      <button 
        onClick={ Previous }
        none="submit"
      >
        Previous
      </button>
      <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
    </div>
  )
}

export default StepThree