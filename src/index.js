import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'

import App from './App'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path='/' component={Home}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'))