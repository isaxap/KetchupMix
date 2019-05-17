import React from 'react'
import './counterTomato.sass'
import {connect} from 'react-redux'

const CounterTomato = (props) => {
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
    total: Math.floor(state.timer.count / 2),
  }
}

export default connect(mapStateToProps)(CounterTomato)
