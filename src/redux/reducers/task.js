import {ADD_TASK, UPDATE_TASK, UPDATE_TIME, DELETE_TASK} from '../actions/actionsTypes'

const initialState = {
  count:0,
  task: [
    //{id: 0, text: 'text', countTomato: 0, totalTime: 0, status: 'active/passive,done'}
  ]
}

export default function task(state = initialState, action) {
  function pushTask() {
    state.task.unshift({
      id: state.count,
      text: action.text,
      countTomato: 0,
      totalTime: 0,
      status: 'passive'})
    return (state.task)
  }

  function deleteTask(item) {
    if(item.id === action.id) return(false)
    else return(true)
  }

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: pushTask(),
        count: state.count + 1
      }
    case UPDATE_TASK:
      return {
        ...state,

        task: state.task.map((item, index) => {
          if (item.id === action.id && action.number === 1) {
            return{
              ...state.task[index],
              status: 'active'
            }
          }
          if (item.id !== action.id && state.task[index].status !== 'done') {
            return{
              ...state.task[index],
              status: 'passive'
            }
          }
          if (item.id === action.id && action.number === 2) {
            return{
              ...state.task[index],
              status: 'done'
            }
          } else {
            return{
              ...state.task[index],
            }
          }
        })
      }
    case UPDATE_TIME:
      return {
        ...state,

        task: state.task.map((item, index) => {
          if (item.status === 'active') {
            return{
              ...state.task[index],
              totalTime: state.task[index].totalTime + 1
            }
          } else {
            return{
              ...state.task[index],
            }
          }
        })
      }
    case DELETE_TASK:
      return {
        ...state,

        task: state.task.filter(deleteTask),
        count: state.count + 1
        }
    default:
      return state
  }
}
