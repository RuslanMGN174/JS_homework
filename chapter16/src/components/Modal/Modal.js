import React, { useState } from 'react'
import './Modal.css'
import { addComment } from '../../actions/Actions'
import { connect } from 'react-redux'

const Modal = ({ addComment }) => {

  const [state, setState] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault(event)

    const newComment =
      {
        id: Date.now(),
        author: event.target.name.value,
        text: event.target.comment.value,
        date: new Date().toLocaleString()
      }
    addComment(newComment)
    console.log(newComment)
    setState(false)
  }

  return (
    <React.Fragment>
      <p onClick={() => setState(true)}>New comment</p>
      {state && (<div className="modal">
          <div className="modal-body">
            <form onSubmit={submitHandler}>
              <div className="textFields">
                <label htmlFor="name">Name</label>
                <input
                  autoFocus
                  className="nameField"
                  id="name"
                  required
                />
              </div>
              <div className="textFields">
                <label htmlFor="comment">Comment</label>
                <textarea
                  className="commentField"
                  id="comment"
                  required
                />
              </div>
              <div className="divCenter">
                <button type="submit">Submit</button>
                <button onClick={() => setState(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

const mapDispatchToProps = {
  addComment
}

export default connect(null, mapDispatchToProps)(Modal)