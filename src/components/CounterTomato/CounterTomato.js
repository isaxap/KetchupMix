import React from 'react'
import './counterTomato.sass'
import {connect} from 'react-redux'
import {addHistory} from '../../redux/actions/actions'

const date = new Date()

const CounterTomato = (props) => {
  props.addHistory(date.getDay(), props.total, props.count) //Send to history
  return (
    <div className='counter-tomato'>
    {props.total >= props.count ?
        <span>
          Mission done. Tomato is completed:&nbsp;{props.total}
        </span>
    :
        <span>
          {props.total}&nbsp;of&nbsp;{props.count}
        </span>}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    count: state.setup.countTomato,
    total: Math.floor(state.timer.count / 2)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addHistory: (day, tomato, plan) => dispatch(addHistory(day, tomato, plan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterTomato)
