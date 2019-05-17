import {SET_WORK_TIME, SET_SHORT_TIME, SET_LONG_TIME, SET_COUNT_TIME} from '../actions/actionsTypes'

const initialState = {
  timers: [25, 5, 20], //work-time, short-break-time, long-break-time
  countTomato: 12
}

export default function setSetting(state = initialState, action) {
  switch (action.type) {
    case SET_WORK_TIME:
      return {
        ...state,
        timers: [ state.timers[0] + action.payload, state.timers[1], state.timers[2]]
      }
    case SET_SHORT_TIME:
      return {
        ...state,
        timers: [state.timers[0], state.timers[1] + action.payload, state.timers[2]]
      }
    case SET_LONG_TIME:
      return {
        ...state,
        timers: [state.timers[0], state.timers[1], state.timers[2] + action.payload]
      }
    case SET_COUNT_TIME:
      return {
        ...state,
        countTomato: state.countTomato + action.payload
      }
    default:
      return state
  }
}
