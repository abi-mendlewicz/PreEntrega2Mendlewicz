import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchProducts, useStockState } from '../hooks/productHooks'
import Loader from './Loader'
import ItemDeatail from './ItemDetail'

export default function ItemDetailContainer() {
  const [quantity, setQuantity] = useState(1)
  const {id} = useParams()
  const stockState = useStockState(id, quantity, setQuantity)
  const {data, isLoading, setPriceFormat} = useFetchProducts('id', id)
  
  if (isLoading) return <Loader />
  
  if (!data) return <p className="py-4 px-6 text-blue-900">No se encontró el producto referido.</p>

  return (
    <ItemDeatail
      data={data}
      quantity={quantity}
      setQuantity={setQuantity}
      stockState={stockState}
      setPriceFormat={setPriceFormat}
    />
  )
}