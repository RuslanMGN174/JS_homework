import { combineReducers } from 'redux'
import { commentReducer } from './commentReducer'

export const rootReducer = combineReducers({
  comments: commentReducer
})