import React from "react";
import NewComment from "./NewComment";


const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

const CommentsList = (props) => {
  return (
    <ul style={styles.ul}>
      {props.comments.map((comment, author, date) => {
        return <NewComment
          author={author}
          comment={comment}
          date={date}
          key={comment.id}
        />
      })}
    </ul>
  )
}

export default CommentsList;