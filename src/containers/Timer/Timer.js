import React, {Component} from 'react'
import './timer.sass'
import DisplayTimer from '../../components/DisplayTimer/DisplayTimer'

class Timer extends Component {

  state = {
    setup:
    {
      time: [10, 20, 30], // work time, short-break time, long-break time. time in secund
      errorTime: 'Err: Time is not define'
    },
    control:
    {
      count: 1, //number, count tomato
      numberTimer: 0, // 0-work, 1-short-break, 2-long-break
      currentTime: 0, // time is active in secund
      status: 'passive', // 'active' || 'passive' || 'stop'
      timer: null // function
    }
  }

  updateTimer = () => {
    const control = this.state.control

    control.currentTime --

    if (control.currentTime === 0) { //end timer

      control.status = 'passive'

      control.numberTimer !== 0 ? this.props.changeBackground('passive') : this.props.changeBackground('relax') // if work time -> red backgroun if break time -> green background

      clearInterval(control.timer)  //clear timer time

      control.count ++                                                              // switch timer
      control.count % 2 !== 0 ? control.numberTimer = 0 :                           // 3 work time -> 3 short-break time
      control.count % 8 !== 0 ? control.numberTimer = 1 : control.numberTimer = 2   // 1 work time -> 1 long-break time

      this.setupTime()  //resetup timer time
    }
    this.setState({control})
  }

  stopTimer = () => {
    const control = this.state.control
    this.props.changeBackground('stop')
    clearInterval(control.timer)
    this.setState({control})
  }

  startTimer = () => {
    const control = this.state.control

    const timer = setInterval(this.updateTimer, 1000);
    control.timer = timer
    this.props.changeBackground('active')
    this.setState({control})
  }


  setupTime = () => {
    const control = this.state.control
    const setup = this.state.setup

    control.currentTime = setup.time[control.numberTimer]
    this.setState ({control})

  }

  onHeadButtonClickHandler = () => {
    const control = this.state.control
    const setup = this.state.setup

    control.status === 'active' && control.currentTime < setup.time[control.numberTimer] ? this.stopTimer () : this.startTimer () // start/stop timer

    control.status =                                                    // if status timer :
    control.status === 'active' && control.currentTime > 0 ? 'stop' :   // active and have currentTime -> status - 'stop'
    control.status === 'active' ? 'passive' : 'active'                  // passive -> 'active' ans stop -> 'active'

    this.setState ({control})

    console.log(
      '| STATUS: ' + this.state.control.status,
      '| TIME: ' + this.state.control.currentTime,
      '| STAGE: ' + this.state.control.numberTimer,
      '| COUNT: ' + Math.round(this.state.control.count/2) + ' |') // NEED DELETE
  }

  componentWillMount () {
    if (this.state.control.currentTime === 0) this.setupTime()
  }

  render() {

    console.log(
      '| STATUS: ' + this.state.control.status,
      '| TIME: ' + this.state.control.currentTime + ' |') // NEED DELETE

    return (
      <button
          className={"btn-floating waves-effect waves-light timer " + this.state.control.status}
          type="button" name="start"
          onClick={this.onHeadButtonClickHandler}>
        <DisplayTimer
          time={this.state.control.currentTime}
          controlStatus={this.state.control.status}
          stage={this.state.control.numberTimer}
        />
      </button>
    )
  }
}

export default Timer
