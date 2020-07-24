import React from 'react'
import NewComment from './NewComment'
import { connect } from 'react-redux'
import { delComment } from '../../actions/Actions'

const CommentsList = ({ commentsList, onDelete }) => {
  if (!commentsList.length) {
    return <p>No comments yet!</p>
  }
  return (
    <div>
      <ul className="column-reverse">
        {commentsList.map((comment, author, date) => {
          return (
            <NewComment
              key={comment.id}
              author={author}
              comment={comment}
              date={date}
              onDelete={onDelete}
            />
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    commentsList: state.comments.comments,
    localStorage: localStorage.setItem('Comments', JSON.stringify(state.comments.comments))
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(delComment(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)