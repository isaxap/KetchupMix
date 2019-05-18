import {ADD_HISTORY} from '../actions/actionsTypes'

const initialState = {
  history:
    [{day: 1, name:'Moon', Tomato: 0, Plan: 0},
    {day: 2, name:'Tiu', Tomato: 0, Plan: 0},
    {day: 3, name:'Woden', Tomato: 0, Plan: 0},
    {day: 4, name:'Thor', Tomato: 0, Plan: 0},
    {day: 5, name:'Freya', Tomato: 0, Plan: 0},
    {day: 6, name:'Saturn', Tomato: 0, Plan: 0},
    {day: 7, name:'Sun', Tomato: 0, Plan: 0}]
}

export default function counter(state = initialState, action) {

  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,

        history: state.history.map((item, index) => {
          if (index === action.day - 1) {
            return{
              ...state.history[index],
              day: index + 1,
              Tomato: action.tomato,
              Plan: action.plan
            }
          }
          return {...state.history[index]}
        })

      }
    default:
      return state

  }
}
