import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { SELECTED_PRODUCT } from '../../constants/actionTypes'
import Details from './Details'

const ProductDetails = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(({ data }) => {
        dispatch({ type: SELECTED_PRODUCT, payload: data })
        setIsLoading(false)
      })
  }, [])

  if (!isLoading) {
    return <Details />
  }

  return null
}

export default ProductDetails
