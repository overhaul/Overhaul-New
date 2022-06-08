import * as React from 'react'

class Radios extends React.Component {
  render() {
    const { step } = this.props
    return (
      <div>
        <input type="radio" id={ step  + '1'} name={ step } value="1"/>
        <label htmlFor={ step }>1</label>
        <input type="radio" id={ step + '2' } name={ step } value="2"/>
        <label htmlFor={ step }>2</label>
        <input type="radio" id={ step + '3' } name={ step } value="3"/>
        <label htmlFor={ step }>3</label>
        <input type="radio" id={ step + '4' } name={ step } value="4"/>
        <label htmlFor={ step }>4</label>
        <input type="radio" id={ step + '5'} name={ step } value="5"/>
        <label htmlFor={ step }>5</label>
      </div>
    )
  }
}

export default Radios