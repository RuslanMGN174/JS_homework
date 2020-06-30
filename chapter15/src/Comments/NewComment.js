import React, { useContext } from "react";
import "./Style.css";
import Context from "../Context";

const NewComment = ({ comment }) => {

  const { removeComment } = useContext(Context);
  const clearText = text => {
    return (
      text.replace(/<!--[\s\S]*?--!?>/g, "").replace(/<\/?[a-z][^>]*(>|$)/gi, "")
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
          <span className="delete" onClick={removeComment.bind(null, comment.id)}> Удалить </span>
        </div>
      </div>
      <div className="media-text text-justify">{clearText(comment.text)}
      </div>
    </div>
  </li>
)
};

export default NewComment;
