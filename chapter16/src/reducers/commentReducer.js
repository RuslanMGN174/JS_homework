import { ADD_COMMENT, DEL_COMMENT } from '../actions/Types'

const commentsArray = () => {
  let array = JSON.parse(localStorage.getItem('Comments'))
  return localStorage.length ? array : []
}

const initialState = {
  comments: commentsArray()
}

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: state.comments.concat(action.payload) }
    case DEL_COMMENT:
      const filteredComments = state.comments.filter(comment => comment.id !== action.payload)
      return {...state, comments: filteredComments}
    default:
      return state
  }
}