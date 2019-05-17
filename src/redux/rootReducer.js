import {combineReducers} from 'redux'
import timer from './reducers/timer'
import setup from './reducers/setup'
import history from './reducers/history'

export default combineReducers({
  timer,
  setup,
  history
})
