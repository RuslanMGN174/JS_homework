import { ADD_COMMENT, DEL_COMMENT } from './Types'

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}

export const delComment = (id) => {
  return {
    type: DEL_COMMENT,
    payload: id
  }
}