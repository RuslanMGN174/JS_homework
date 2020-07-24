import React from 'react'
import Modal from '../components/Modal/Modal'
import CommentsList from '../components/Comments/CommentList'

const App = () => {

  return (
    <div>
      <div className="sidenav">
        <Modal/>
      </div>
      <div className="main">
        <CommentsList/>
      </div>
    </div>
  )
}
export default App