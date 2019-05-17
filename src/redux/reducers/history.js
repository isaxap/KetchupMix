import {ADD_HISTORY} from '../actions/actionsTypes'

//const time = new Date()
//const date = time.getFullYear()+ '-' + time.getMonth() + 1 + '-' + time.getDate()

const initialState = {
  date: 2011-1-11,
  activeHistory: 0,
  history: [
    {count:1}, {count:2}
  ]
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD_HISTORY:
    if (action.payload === state.date) {
      var history = {...state.history}
      console.log('111---'+ history);
      return {
        //state.history[state.activeHistory].count: state.history[state.activeHistory].count + 1
      }
    }
    else {
      return {
        //state.history[state.activeHistory + 1].count: state.history[state.activeHistory + 1].count: + 1
      }
    }
    default:
      return state

  }
}
