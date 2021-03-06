import React, { useState } from 'react'
import Radio from './Radios'
import IconAir from '../icons/IconAir'

const StepSlide = ({ prevStep, nextStep, slide, slideNumber, values }) => {

  // 5 radios
  let radiosClone = [0, 0, 0, 0, 0]
  const selection = (slide, choice) => { return { slide: slide, choice: choice } }

  const [radios, setRadios] = useState([0, 0, 0, 0, 0]);
  const [finalStep, setFinalStep] = useState(false);
  const [loading, setLoading] = useState(false)
  
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

  const Continue = e => {

    e.preventDefault();
    if (formSelections[slideNumber + 1]) {
      radiosClone[formSelections[slideNumber + 1].choice - 1] = 1
      setRadios(radiosClone)
    }
    setRadios(radiosClone)

    if (formSelections[slideNumber]) {
      nextStep();
    } else {
      return
    }

    if (slideNumber < 17) {
      setFinalStep(false)
    } else {
      setFinalStep(true)
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

    setRadios(radiosClone)
    prevStep();
  }

  const checkFinal = e => {
    if (formSelections[slideNumber]) {
      setLoading(true)
    } else {
      e.preventDefault();
    }
  }

  return (
    <div>
      <div className={ loading ? 'hide' : '' }>
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
              className={ formSelections[slideNumber] === undefined ? 'disabled' : '' }
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
              <input className={`done ${formSelections[slideNumber] === undefined ? 'disabled' : ''}`} type="submit" onClick={checkFinal} value="Done" />
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
      <div className={`spinner ${ loading ? '' : 'hide' }`}>
        <IconAir />
      </div>
    </div>
  )
}

export default StepSlide
export const formSelections = []