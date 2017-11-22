import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostsIndex from './components/PostsIndex'
import PostsNew from './components/PostsNew'
import promise from 'redux-promise'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={ PostsIndex } />
          <Route path='/posts/new' component={ PostsNew } />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'))