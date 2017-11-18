import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PostsIndex from './components/PostsIndex'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path='/' component={PostsIndex } />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'))