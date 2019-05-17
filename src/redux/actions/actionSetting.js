import {SET_WORK_TIME, SET_SHORT_TIME, SET_LONG_TIME, SET_COUNT_TIME} from './actionsTypes'

export function setWorkTime(number) {
  return {
    type: SET_WORK_TIME,
    payload: number
  }
}
export function setShortTime(number) {
  return {
    type: SET_SHORT_TIME,
    payload: number
  }
}
export function setLongTime(number) {
  return {
    type: SET_LONG_TIME,
    payload: number
  }
}
export function setCountTime(number) {
  return {
    type: SET_COUNT_TIME,
    payload: number
  }
}
