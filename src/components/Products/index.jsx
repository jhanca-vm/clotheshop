import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../reducers/products'
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
      .then(products => dispatch(setProducts(products)))
  }, [])

  return <Catalogue />
}

export default Products
