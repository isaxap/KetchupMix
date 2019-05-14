import React from 'react'
import './displayTimer.sass'

const DisplayTimer = (props) => {

  const min = Math.floor(props.time/60)
  const sec = props.time%60
  const time = (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)  // convert time format

  const stage = props.stage === 0 ? 'Work-time' :
  props.stage === 1 ? 'Short-break' : 'Long-break'  // stage timer label

  return (
    <React.Fragment>
      <strong>
        {props.controlStatus === 'active' ? 'Stop' : 'Start'}
      </strong>
      <div className="box-timer">
        <span id="timer" className='timer'>
          {time}
        </span>
      </div>
      <strong>
        {stage}
      </strong>
    </React.Fragment>
  )
}

export default DisplayTimer
