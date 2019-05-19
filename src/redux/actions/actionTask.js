import {ADD_TASK, UPDATE_TASK, UPDATE_TIME, DELETE_TASK} from './actionsTypes'


export function addTask(text) {
  return {
    type: ADD_TASK,
    text: text
  }
}

export function updateTask(id, number) {
  return {
    type: UPDATE_TASK,
    id: id,
    number: number
  }
}

export function updateTime() {
  return {
    type: UPDATE_TIME
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id: id
  }
}
