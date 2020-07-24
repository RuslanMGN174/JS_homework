import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import App from './containers/App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/RootReducer'

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(app,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
