import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className='form-group'>
      <label>{field.label}</label>
        <input
          className='form-control'
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  onSubmit(values) {
    console.log('values:', values)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title" 
          label='Title'
          component={this.renderField}
        />
        <Field
          name="categories"
          label='Categories '
          component={this.renderField}
        />
        <Field
          name='content'
          label='Post Content'
          component={this.renderField}
        />
        <button className='btn btn-primary' type='submit'>Save</button>
        <button className='btn btn-danger ' type='reset'>Cancel</button>
      </form>
    )
  }
}

function validate(values) {
  console.log(values)
  const errors = {}

  //validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Enter a title!'
  }
  if (!values.categories) {
    errors.categories = 'Enter some Categories!'
  }
  if (!values.content) {
    errors.content = 'Enter some Content!'
  }

  return errors
}
  
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew)