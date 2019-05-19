import React, {Component} from 'react'
import './timer.sass'
import DisplayTimer from '../../components/DisplayTimer/DisplayTimer'
import {connect} from 'react-redux'
import {updateCount} from '../../redux/actions/actionTimer'
import {updateTime} from '../../redux/actions/actionTask'


class Timer extends Component {

  state = {
    control:
    {
      numberTimer: 0, // 0-work, 1-short-break, 2-long-break
      currentTime: 0, // time is active in secund
      status: 'passive', // 'active' || 'passive' || 'stop'
      timer: null, // function
      test: 1 //1-test, 60-normal
    }
  }

  updateTimer = () => {
    const control = this.state.control

    control.currentTime --
    if (control.numberTimer === 0) this.props.updateTime() 
    if (control.currentTime === 0) { //end timer

      control.status = 'passive'

      control.numberTimer !== 0 ? this.props.changeBackground('passive') : this.props.changeBackground('relax') // if work time -> red backgroun if break time -> green background

      clearInterval(control.timer)  //clear timer time

      this.props.updateCount()
      this.props.count % 2 !== 0 || this.props.count === 1 ? control.numberTimer = 0 : // 3 work time -> 3 short-break time
      this.props.count % 8 !== 0 ? control.numberTimer = 1 : control.numberTimer = 2   // 1 work time -> 1 long-break time
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

  onHeadButtonClickHandler = () => {
    const control = this.state.control

    control.status === 'active' ? this.stopTimer () : this.startTimer () // start/stop timer

    control.status =                                                    // if status timer :
    control.status === 'active' && control.currentTime > 0 ? 'stop' :   // active and have currentTime -> status - 'stop'
    control.status === 'active' ? 'passive' : 'active'                  // passive -> 'active' ans stop -> 'active'

    this.setState ({control})

    console.log(
      '| STATUS: ' + this.state.control.status,
      '| TIME: ' + this.state.control.currentTime,
      '| STAGE: ' + this.state.control.numberTimer + ' |') // TODO:  NEED DELETE
  }

  componentWillMount () {
    const control = this.state.control
    if (this.props.count % 2 === 0 && this.props.count !== 1 ) {
      this.props.changeToRelax()
      this.props.count % 8 === 0 ? control.numberTimer = 2 : control.numberTimer = 1
    }
  }

  render() {
      const control = this.state.control

      if (control.status === 'passive') {        //upload time on current settings if timer don't start and if time-out to next timer
        control.currentTime = this.props.timers[control.numberTimer] * control.test
      }

    console.log(
      '| STATUS: ' + this.state.control.status,
      '| TIME: ' + this.state.control.currentTime + ' |') // TODO:  NEED DELETE

      const cls = ['btn-floating', 'waves-effect', 'waves-light', 'timer', control.status]
      if (control.status === 'active') cls.push('pulse')

    return (
      <button
          className={cls.join(' ')}
          type="button" name="start"
          onClick={this.onHeadButtonClickHandler}>
        <DisplayTimer
          time={control.currentTime}
          controlStatus={control.status}
          stage={control.numberTimer}
        />
      </button>
    )
  }
}

function mapStateToProps (state) {
  return {
    //SETTINGS
    timers: state.setup.timers,
    countTomato: state.setup.countTomato,
    //CONTROL
    count: state.timer.count
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateCount: () => dispatch(updateCount()),
    updateTime: () => dispatch(updateTime())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
