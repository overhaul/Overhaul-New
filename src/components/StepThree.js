import React, {useState, useRef} from 'react'
import { formSelections } from './Radios'
import Radios from './Radios'


const StepThree = ({ prevStep, slide, values, }) => {

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
        <button 
          onClick={ Previous }
          none="submit"
        >
          Previous
        </button>
        <input className="done" type="submit" value={loading ? "Loading..." : "DONE"} />
      </div>
      <input 
          type="hidden"
          htmlFor="name"
          name="Name"
          value={ values.name }
          />
      {formSelections.map(function(item, i){
        return <input 
                key={i}
                type="hidden"
                htmlFor="name"
                name={item.step}
                value={item.choice}
                />;
          }
        )
      }
    </div>
  )
}

export default StepThree