import { useState, useEffect } from 'react'
import { products } from '../data/products'

export const useFetchProducts = (filterBy = 'category', value = 'all') => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const fetchData = new Promise((resolve, reject) => {
        let filteredProducts

        if (products) {
          if (filterBy == 'category') {
            filteredProducts = value == 'all' ? products : products.filter(product => product.category == value)
          } else if (filterBy == 'id') {
            filteredProducts = products.find(product => product.id == value)
          }
        }

        if (filteredProducts) {
          resolve(filteredProducts)
        } else {
          reject()
        }
      })

      fetchData.then(fetchedData => {
        setData(fetchedData)
        setIsLoading(false)
      }).catch(error => {
        setIsLoading(false)
      })
    }, 1000)

    return () => {
      setIsLoading(true)
    }
  }, [value])

  const setPriceFormat = price => new Intl.NumberFormat(
    'es-UY',
    {
      style: 'currency',
      currency: 'UYU'
    }
  ).format(price)

  return {data, isLoading, setPriceFormat}
}

export const useStockState = (productId, quantity, setQuantity) => {
  const product = products.find(_product => _product.id == productId)
  const initialStock = product?.stock || 0
  const [stock, setStock] = useState(initialStock)

  useEffect(() => {
    if (product) {
      setStock(initialStock - quantity)
    }
  }, [productId, quantity])

  const increment = () => stock > 0 && setQuantity(quantity => quantity + 1)
  const decrement = () => quantity > 1 && setQuantity(quantity => quantity - 1)

  return [stock, increment, decrement]
}