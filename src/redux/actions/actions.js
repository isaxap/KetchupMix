import {TEST, ADD_HISTORY} from './actionsTypes'

export function test(number) {
  return {
    type: TEST,
    payload: number
  }
}
export function addHistory(date) {
  return {
    type: ADD_HISTORY,
    payload: date
  }
}
