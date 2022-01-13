import React from 'react'
import IdleTimer from 'react-idle-timer';
import { IdleScreenModal } from './IdleScreenModal'

class IdleScreen extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      timeout:1000 * 5 * 1,
      showModal: false,
      isTimedOut: false
    }

    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }

  _onAction(e) {
    console.log('user did something', e)
    this.setState({isTimedOut: false})
  }

  _onActive(e) {
    console.log('user is active', e)
    this.setState({isTimedOut: false})
  }

  _onIdle(e) {
    console.log('user is idle', e)
    const isTimedOut = this.state.isTimedOut
    if (isTimedOut) {
       //do nothing
    } else {
      this.setState({showModal: true})
      this.idleTimer.reset();
      this.setState({isTimedOut: true})
    }
    
  }

  handleClose() {
    this.setState({showModal: false})
  }

  render(){

    return(
      <>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout} />

          <div className="">              
              <IdleScreenModal 
                  showModal={this.state.showModal} 
                  handleClose={this.handleClose}
              />
          </div>
      </>
    )
 }
}

export default IdleScreen