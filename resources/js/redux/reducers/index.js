import { combineReducers, } from 'redux'
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import translationReducer from './translationReducer'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  translation: translationReducer,
})
