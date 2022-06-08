import * as React from 'react'

class Radios extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" id="1" name="A" value="1"/>
        <label for="1">1</label>
        <input type="radio" id="2" name="A" value="2"/>
        <label for="2">2</label>
        <input type="radio" id="3" name="A" value="3"/>
        <label for="3">3</label>
        <input type="radio" id="4" name="A" value="4"/>
        <label for="4">4</label>
        <input type="radio" id="5" name="A" value="5"/>
        <label for="C">5</label>
      </div>
    )
  }
}

export default Radios