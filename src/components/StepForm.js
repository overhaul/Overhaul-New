import React, {Component} from 'react'
import StepOne from './StepOne'
import StepSlide from './StepSlide'
import StepFinal from './StepFinal'

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
       // nothing
      }
    } else if (step > 1) {
      console.log('bigger')
      //need to clear the Radios here I think
      if (step.value === '') {
        return alert('Please make a selection');
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
          <StepSlide 
            slide="A"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 3: 
        return (
          <StepSlide 
            slide="B"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 4: 
        return (
          <StepSlide 
            slide="C"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 5: 
        return (
          <StepSlide 
            slide="D"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 6: 
        return (
          <StepSlide 
            slide="E"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 7: 
        return (
          <StepSlide 
            slide="F"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 8: 
        return (
          <StepSlide 
            slide="G"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 9: 
        return (
          <StepSlide 
            slide="H"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 10: 
        return (
          <StepSlide 
            slide="I"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 11: 
        return (
          <StepSlide 
            slide="J"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 12: 
        return (
          <StepSlide 
            slide="K"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 13: 
        return (
          <StepSlide 
            slide="L"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 14: 
        return (
          <StepSlide 
            slide="M"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 15: 
        return (
          <StepSlide 
            slide="N"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 16: 
        return (
          <StepSlide 
            slide="O"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 17: 
        return (
          <StepSlide 
            slide="P"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 18: 
        return (
          <StepSlide 
            slide="Q"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 19: 
        return (
          <StepSlide 
            slide="R"
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 20: 
        return (
          <StepFinal 
            values={ values }
            slide='S'
            prevStep={ this.prevStep }
            handleChange={ this.handleChange }
          >
          </StepFinal>
        )
      default: 
          // do nothing
    }
  }
}

export default StepForm

export const formSelections = []