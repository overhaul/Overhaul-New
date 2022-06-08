import React, {Component} from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'

class StepForm extends Component {
  state = {
    step: 1,
    name: ''
  }
  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }
  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }
  // handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }
  render() {
    const { step } = this.state;
    const { name } = this.state;
    const values = { name }
    
    switch(step) {
      case 1: 
        return (
          <StepOne 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <StepTwo 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
        return (
          <div>WOO!</div>
        )
      default: 
          // do nothing
    }
  }
}

export default StepForm