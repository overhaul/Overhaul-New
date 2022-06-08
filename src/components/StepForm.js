import React, {Component} from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import Radios from './Radios'

class StepForm extends Component {
  state = {
    step: 1,
    name: '',
    slide: '',
  }
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }
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
            values={ values.name }
          />
        )
      case 2: 
        return (
          <StepTwo 
            values={ values.steptwo }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            radios= {(<Radios step='A'/>)}
          >
          </StepTwo>
        )
        case 3: 
        return (
          <StepThree 
            values={ values }
            slide='B'
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            radios= {(<Radios step='B'/>)}
          >
          </StepThree>
        )
      case 4: 
        return (
          <div>WOO!</div>
        )
      default: 
          // do nothing
    }
  }
}

export default StepForm