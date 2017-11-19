import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  //lifecycle method that is invoked immediately after a component is mounted to the DOM.
  //good place to load data from an API
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex)