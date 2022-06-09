import * as React from 'react'

class FormName extends React.Component {
  render(){
    return(
      <div>
        <div className="input-style">
          <label htmlFor='name'>
              Name
          </label>
          <input type="text" id="name"  name="Name" placeholder='Your Name *' />
        </div> 
      </div>
    )
  }
}

export default FormName