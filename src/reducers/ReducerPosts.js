import _ from 'lodash'
import { FETCH_POSTS } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      //using lodash to transform array of objects in an object where key is id and value is post
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}