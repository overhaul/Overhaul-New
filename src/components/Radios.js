import * as React from 'react'

class Radios extends React.Component {
  render() {
    const { step } = this.props
    return (
      <div className="gutcheck-radios">
        <label htmlFor={ step + '1'}>
          <input type="radio" id={ step  + '1'} name={ step } value="1" checked={true}/>
          <p>1</p>
        </label>
        <label htmlFor={ step + '2'}>
          <input type="radio" id={ step + '2' } name={ step } value="2"/>
          <p>2</p>
        </label>
        <label htmlFor={ step + '3'}>
          <input type="radio" id={ step + '3' } name={ step } value="3"/>
          <p>3</p>
        </label>
        <label htmlFor={ step + '4'}>
          <input type="radio" id={ step + '4' } name={ step } value="4"/>
          <p>4</p>
        </label>
        <label htmlFor={ step + '5'}>
          <input type="radio" id={ step + '5'} name={ step } value="5"/>
          <p>5</p>
        </label>
      </div>
    )
  }
}

export default Radios