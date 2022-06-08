import React, {useState, useRef} from 'react'
import Radios from './Radios'

const StepThree = ({ prevStep, nextStep, handleChange, slide, values }) => {
  const { name } = values
  
  // const Continue = e => {
  //   e.preventDefault();
  //   nextStep();
  // }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const [loading, setLoading] = useState(false)

  return (
    <div>
      <h3>the end</h3>
      <p>{ name }</p>
      <input placeholder="Name"
            label="Name"
            htmlFor="name"
            name="Name"
            value={name}
            defaultValue={name}
            autoComplete="name"
            />
      <Radios step={slide}/>
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