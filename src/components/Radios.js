import * as React from 'react'

class Radios extends React.Component {
  render() {
    const { step } = this.props
    return (
      <div>
        <input type="radio" id="1" name={ step } value="1"/>
        <label htmlFor="1">1</label>
        <input type="radio" id="2" name={ step } value="2"/>
        <label htmlFor="2">2</label>
        <input type="radio" id="3" name={ step } value="3"/>
        <label htmlFor="3">3</label>
        <input type="radio" id="4" name={ step } value="4"/>
        <label htmlFor="4">4</label>
        <input type="radio" id="5" name={ step } value="5"/>
        <label htmlFor="C">5</label>
      </div>
    )
  }
}

export default Radios