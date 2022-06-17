import React, {Component} from 'react'
import StepOne from './StepOne'
import StepSlide from './StepSlide'

class StepForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
      slide: '',
      slideNumber: '',
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
      if ( name.length <= 1) {
        return alert('Please enter your name');
      } else {
       // nothing
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
            values={ values }
            slide="A"
            slideNumber={ 0 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 3: 
        return (
          <StepSlide 
            values={ values }
            slide="B"
            slideNumber={ 1 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 4: 
        return (
          <StepSlide 
            values={ values }
            slide="C"
            slideNumber={ 2 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 5: 
        return (
          <StepSlide 
            values={ values }
            slide="D"
            slideNumber={ 3 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 6: 
        return (
          <StepSlide 
            values={ values }
            slide="E"
            slideNumber={ 4 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 7: 
        return (
          <StepSlide 
            values={ values }
            slide="F"
            slideNumber={ 5 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 8: 
        return (
          <StepSlide 
            values={ values }
            slide="G"
            slideNumber={ 6 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 9: 
        return (
          <StepSlide 
            values={ values }
            slide="H"
            slideNumber={ 7 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 10: 
        return (
          <StepSlide 
            values={ values }
            slide="I"
            slideNumber={ 8 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 11: 
        return (
          <StepSlide 
            values={ values }
            slide="J"
            slideNumber={ 9 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 12: 
        return (
          <StepSlide 
            values={ values }
            slide="K"
            slideNumber={ 10 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 13: 
        return (
          <StepSlide 
            values={ values }
            slide="L"
            slideNumber={ 11 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 14: 
        return (
          <StepSlide 
            values={ values }
            slide="M"
            slideNumber={ 12 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 15: 
        return (
          <StepSlide 
            values={ values }
            slide="N"
            slideNumber={ 13 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 16: 
        return (
          <StepSlide 
            values={ values }
            slide="O"
            slideNumber={ 14 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 17: 
        return (
          <StepSlide 
            values={ values }
            slide="P"
            slideNumber={ 15 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 18: 
        return (
          <StepSlide 
            values={ values }
            slide="Q"
            slideNumber={ 16 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 19: 
        return (
          <StepSlide 
            values={ values }
            slide="R"
            slideNumber={ 17 }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      case 20: 
        return (
          <StepSlide 
            values={ values }
            slide='S'
            slideNumber={ 18 }
            prevStep={ this.prevStep }
            handleChange={ this.handleChange }
          >
          </StepSlide>
        )
      default: 
          // do nothing
    }
  }
}

export default StepForm

export const formSelections = []