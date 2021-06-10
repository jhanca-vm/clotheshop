import { combineReducers } from 'redux'
import products from './reducers/products'
import selectedProduct from './reducers/selectedProduct'

export default combineReducers({ products, selectedProduct })
