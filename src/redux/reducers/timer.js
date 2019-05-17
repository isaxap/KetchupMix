import {UPDATE_COUNT, RESET_COUNT} from '../actions/actionsTypes'

const initialState = {
  count: 1, //number, count tomato
}

export default function timer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COUNT:
      return {
        count: state.count + 1
      }
    case RESET_COUNT:
      return {
        count: + 1
      }
    default:
      return state
  }
}
