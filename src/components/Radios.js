import React, { useState } from 'react'

const Radio = ({ slide, setSelection, i, className }) => {

  return (
    <>
      <label className={`${className}`} htmlFor={ slide + (i+1) }>
        <input type="radio" 
          id={ slide + (i+1) } 
          name={ slide } 
          value={ (i+1) }
          onClick={setSelection} />
        <p>{ i+1 } </p>
      </label>
    </>
  )
}

export default Radio