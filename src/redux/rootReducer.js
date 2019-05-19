import {combineReducers} from 'redux'
import timer from './reducers/timer'
import setup from './reducers/setup'
import history from './reducers/history'
import task from './reducers/task'

export default combineReducers({
  timer,
  setup,
  history,
  task
})
