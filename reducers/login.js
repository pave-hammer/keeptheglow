import {
  GET_USER_SUCCESS,
  GET_USER_FAILED
} from '../actions/login.js'

const initialState = {
  userData: {}
}


// const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_SUCCESS:
      return { ...state, userData: action.value }
    case GET_USER_FAILED:
      return action.value
    default:
      return state
  }
}