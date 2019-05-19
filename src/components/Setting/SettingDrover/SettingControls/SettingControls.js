import React from 'react'
import './settingControls.sass'
import {connect} from 'react-redux'
import {setWorkTime, setShortTime, setLongTime, setCountTime} from '../../../../redux/actions/actionSetting'
// import {addHistory} from '../../../../redux/actions/actions'
<<<<<<< HEAD
=======

>>>>>>> local

const SettingControls = props => {
  const items = [
    {label: 'Work time', context: props.timers[0],
      add: () => props.setWorkTime(1),
      sub: () => props.setWorkTime(-1)},
    {label: 'Short-break time', context: props.timers[1],
      add: () => props.setShortTime(1),
      sub: () => props.setShortTime(-1)},
    {label: 'Long-break time', context: props.timers[2],
      add: () => props.setLongTime(1),
      sub: () => props.setLongTime(-1)},
    {label: 'Count Tomato', context: props.countTomato,
      add: () => props.setCountTomato(1),
      sub: () => props.setCountTomato(-1)}
  ]

  return (
    <div className='settingBox'>
      <div className='row'>
        {items.map((items, index) => {return(
          <React.Fragment key={index}>
            {index === 3? <div className='col s12'><hr /></div> : null}
            <div className='col s7'>
            {items.label}
            </div>
            <div className='col s5'>
              <span
              className='set-button'
              onClick={items.add}
              >+</span>
              <span className='input'>{items.context}</span>
              <span
              className='set-button'
              onClick={items.sub}
              >-</span>
            </div>
          </React.Fragment>
        )})}
      </div>
      {/*<button onClick={() => props.addHistory(3, 4,items[0].context)}>'run'</button>*/}
    </div>
  )
}



function mapStateToProps (state) {
  return {
    timers: state.setup.timers,
    countTomato: state.setup.countTomato
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setWorkTime: number => dispatch(setWorkTime(number)),
    setShortTime: number => dispatch(setShortTime(number)),
    setLongTime: number => dispatch(setLongTime(number)),
    setCountTomato: number => dispatch(setCountTime(number)),

    // addHistory: (day, tomato, plan) => dispatch(addHistory(day, tomato, plan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingControls)
