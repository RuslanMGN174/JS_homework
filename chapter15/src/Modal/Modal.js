import React from "react";
import "./Modal.css";

const styles = {

  input: {
    width: "394px"
  },

  textarea: {
    width: "394px",
    height: "100px",
    resize: "none",
  },

  div: {
    marginBottom: "1rem",
    // textAlign: "center"
  },

  divCenter: {
    marginBottom: "1rem",
    textAlign: "center"
  },

  label: {
    display: "inline-block",
    marginBottom: ".5rem"
  },

  button: {
    width: "400px",
    marginBottom: "1rem"
  }
}
export default class Modal extends React.Component {
  state = {
    isOpen: false
  }


  render() {
    return (
      <React.Fragment>
        <a href="#about" onClick={() => this.setState({ isOpen: true })}>New comment</a>
        {this.state.isOpen && (<div className="modal">
          <div className="modal-body">
            <form onSubmit={this.props.onSubmit}>
              <div style={styles.div}>
                <label htmlFor="name">Name</label>
                <input autoFocus
                  style={styles.input}
                  id="name"
                  required
                />
              </div>
              <div style={styles.div} >
                <label htmlFor="comment">Comment</label>
                <textarea
                  style={styles.textarea}
                  id="comment"
                  required 
                  />
              </div>
              <div style={styles.divCenter} >
                <button type="submit" style={styles.button}>Submit</button>
                <button style={styles.button} onClick={() => this.setState({ isOpen: false })}>Close</button>
              </div>
            </form>
          </div>
        </div>
        )}
      </React.Fragment>
    );
  }
}