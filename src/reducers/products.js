import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from '../constants/actionTypes'

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return payload
    default:
      return state
  }
}

export const setProducts = products => ({
  type: SET_PRODUCTS,
  payload: products,
})
