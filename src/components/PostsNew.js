import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          placeholder="Title"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <form>
        <label>First Name</label>
        <Field
          name="title"
          component={this.renderTitleField}
        />
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
        <Field
          name="content"
          component="textarea"
          type="textarea"
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)