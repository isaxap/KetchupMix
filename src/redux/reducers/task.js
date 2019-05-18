import {ADD_TASK, UPDATE_TASK, CLEAR_TASK, DELETE_TASK} from '../actions/actionsTypes'

const initialState = {
  task: [
    //{id: 0, text: 'text', status: 'active/passive/done', countTomato: 0, totalTime: 0}
  ]
}

export default function timer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: state.task.push({id: state.task.count, text: action.text, status: 'active', countTomato: 0, totalTime: 0})
      }
    case UPDATE_TASK:
      return {
        count: state.count + 1
      }
    case CLEAR_TASK:
      return {
        count: state.count + 1
      }
    case DELETE_TASK:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}
