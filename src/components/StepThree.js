import React, {useState, useRef} from 'react'
import Radios from './Radios'


const StepThree = ({ prevStep, nextStep, handleChange, slide, values, radios }) => {

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const [loading, setLoading] = useState(false)

  return (
    <div>
      <h1>Slide: Z</h1>
      <p>{ values.name }</p>
      {values.steptwo}
      <Radios step={slide}/>
      <div className="buttons">
        <input 
          type="hidden"
          placeholder="Name"
          label="Name"
          htmlFor="name"
          name="Name"
          value={ values.name }
          autoComplete="name"
          />
        <button 
          onClick={ Previous }
          none="submit"
        >
          Previous
        </button>
        <input className="done" type="submit" value={loading ? "Loading..." : "DONE"} />
      </div>
    </div>
  )
}

export default StepThree