import React, { useState } from 'react'
import Radio from './Radios'

const StepSlide = ({ prevStep, nextStep, slide, slideNumber, values }) => {

  // 5 radios
  let radiosClone = [0, 0, 0, 0, 0]
  const selection = (slide, choice) => { return { slide: slide, choice: choice } }

  const [radios, setRadios] = useState([0, 0, 0, 0, 0]);
  const [finalStep, setFinalStep] = useState(false);
  const [loading] = useState(false)
  
  const setSelection = e => {
    const results = selection(slide, e.target.value)

    radiosClone[e.target.value - 1] = 1
    setRadios(radiosClone)
    
    if (formSelections[slideNumber]) {
      if (formSelections[slideNumber].slide === slide) {
        formSelections[slideNumber].choice = e.target.value
      } else {
        formSelections.push(results)
      }
    } else {
      formSelections.push(results)
    }
    formSelections.sort((a, b) => (a.slide > b.slide) ? 1 : -1)
  }

  console.log(formSelections[slideNumber]);

  const Continue = e => {

    e.preventDefault();
    if (slideNumber < 17) {
      setFinalStep(false)
    } else {
      setFinalStep(true)
    }

    if (formSelections[slideNumber + 1]) {
      radiosClone[formSelections[slideNumber + 1].choice - 1] = 1
      setRadios(radiosClone)
    }
    setRadios(radiosClone)

    if (formSelections[slideNumber]) {
      nextStep();
    } else {
      alert("Please select a number before continuing")
    }
  }

  const Previous = e => {
    e.preventDefault();

    if (slideNumber > 0 && (slideNumber < 19)) {
      setFinalStep(false)
      if (formSelections[slideNumber-1]) {
        radiosClone[formSelections[slideNumber - 1].choice - 1] = 1
        setRadios(radiosClone)
      }
    } else {
      setFinalStep(true)
    }

    if (slideNumber === 0) {
      if (window.confirm("Would you like to restart?")) {
        prevStep();
      } else {
        setFinalStep(false)
      }
    } else {
      setRadios(radiosClone)
      prevStep();
    }
  }

  const checkFinal = e => {
    if (formSelections[slideNumber]) {
      console.log('answered')
    } else {
      e.preventDefault();
      alert("Please select a number before continuing")
    }
  }

  return (
    <div>
      <h1>Slide: { slide }</h1>
      <div className="gutcheck-radios">
        {radios.map((radio, i) => 
          (radio === 1) ? 
            <Radio
              key={i}
              slide={ slide }
              setSelection={ setSelection }
              i={ i }
              className="active"
            /> :
            <Radio
              key={i}
              slide={ slide }
              setSelection={ setSelection }
              i={ i }
              className=""
            />
        )}
      </div>
      { (!finalStep) ?
        <div className="buttons">
          <button 
            className={slideNumber === 0 ? 'hide' : 'prev' }
            onClick={ Previous }
            type="none"
          >
            Prev
          </button>
          <button 
            className= { formSelections[slideNumber] === undefined ? 'disabled' : '' }
            onClick={ Continue }
            type="none"
          >
            Next
          </button>
        </div> :
        <div>
          <div className="buttons">
            <button 
              className="prev"
              onClick={ Previous }
              none="submit"
            >
              Prev
            </button>
            <input className="done" type="submit" onClick={checkFinal} value={loading ? "Loading..." : "Done"} />
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
                    name={item.slide}
                    value={item.choice}
                    />;
              }
            )
          }
        </div>
      }
    </div>
  )
}

export default StepSlide
export const formSelections = []