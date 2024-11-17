import { useParams } from 'react-router-dom'
import { useFetchProducts } from '../hooks/productHooks'
import Loader from './Loader'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const {category} = useParams()
  const {data, isLoading, setPriceFormat} = useFetchProducts('category', category || 'all')
  
  if (isLoading) return <Loader />
  if (!data) return <p className="py-4 px-6 text-blue-900">No se encontraron productos.</p>

  return <ItemList data={data} setPriceFormat={setPriceFormat} />
}