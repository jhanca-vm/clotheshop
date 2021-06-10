import { SET_PRODUCTS } from '../constants/actionTypes'

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return payload
    default:
      return state
  }
}
