import {TEST} from '../actions/actionsTypes'

const initialState = {
  counter: 0
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
