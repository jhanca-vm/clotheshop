import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { SET_PRODUCTS } from '../../constants/actionTypes'
import Catalogue from './Catalogue'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(({ data }) =>
        data.filter(
          ({ category }) =>
            category !== 'electronics' && category !== 'jewelery'
        )
      )
      .then(products => dispatch({ type: SET_PRODUCTS, payload: products }))
  }, [])

  return <Catalogue />
}

export default Products
