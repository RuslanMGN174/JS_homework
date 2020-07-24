import React from 'react'
import './Style.css'

const NewComment = ({ comment, onDelete }) => {

  const clearTextFromTags = text => {
    return (
      text.replace(/<!--[\s\S]*?--!?>/g, '').replace(/<\/?[a-z][^>]*(>|$)/gi, '')
    )
  }

  return (
    <li className="media-left">
      <div className="media-body">
        <div className="media-heading">
          <div className="author">{comment.author}</div>
          <div className="metadata">
            <span className="date">{comment.date}</span>
            <span className="devide"> | </span>
            <span className="delete" onClick={() => onDelete(comment.id)}> Удалить </span>
          </div>
        </div>
        <div className="media-text text-justify">{clearTextFromTags(comment.text)}
        </div>
      </div>
    </li>
  )
}

export default NewComment
