import { SELECTED_PRODUCT } from '../constants/actionTypes'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return payload
    default:
      return state
  }
}
