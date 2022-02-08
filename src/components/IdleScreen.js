import React from 'react'
import IdleTimer from 'react-idle-timer';
import DvdLogo from "./DvdLogo";

class IdleScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showLogo: false,
      idleTimeout: 5, // minutes
      screenH: 0,
      screenW: 0
    }

    this.handleOnActive = this.handleOnActive.bind(this)
    this.handleOnIdle = this.handleOnIdle.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  handleOnActive(event) {
    this.setState({showLogo: false})
  }

  handleOnIdle(event) {
    this.setState({showLogo: true})
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({screenW: window.innerWidth, screenH: window.innerHeight})
  }

  render() {
    return (
      <div>
        <IdleTimer
          timeout={1000 * 60 * this.state.idleTimeout}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          debounce={250}
        />
        {this.state.showLogo &&
          <svg width={this.state.screenW} height={this.state.screenH} style={{backgroundColor: 'black', zIndex: 1000, position: 'relative'}}>
            <DvdLogo width={this.state.screenW} height={this.state.screenH}/>
          </svg>
        }
      </div>
    )
  }

}

export default IdleScreen