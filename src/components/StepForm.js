import React, {Component} from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import Radios from './Radios'

class StepForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      slide: '',
      cheked: 'false',
    }
  }
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = () => {
    const { name } = this.state;
    const { step } = this.state;
    if (step === 1) {
      console.log("page 1")
      if ( name.length <= 1) {
        return alert('Please enter your name');
      } else {
        
        console.log('mmm');
      }
    }
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
            slide="A"
            values={ values.steptwo }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
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