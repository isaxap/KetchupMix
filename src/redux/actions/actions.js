import {TEST, ADD_HISTORY} from './actionsTypes'

export function test(number) {
  return {
    type: TEST,
    payload: number
  }
}
export function addHistory(day, tomato, plan) {
  return {
    type: ADD_HISTORY,
    day: day,
    tomato: tomato,
    plan: plan
  }
}
