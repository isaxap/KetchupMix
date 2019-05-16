import {TEST} from '../actions/actionsTypes'

const initialState = {
  setup:
    {
      time: [10, 20, 30], // work time, short-break time, long-break time. time in secund
      countTomato: 12
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

export default function counter(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        counter: state.counter + action.payload
      }
    default:
      return state

  }
}
