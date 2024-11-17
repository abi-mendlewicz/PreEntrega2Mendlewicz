import { Link } from 'react-router-dom'

export default function ItemCard({id, title, price, pictureUrl, setPriceFormat}) {
  return (
    <div className='text-blue-900'>
      <img src={pictureUrl} alt={title} className='rounded-3xl' />
      <h2 className='text-lg font-bold'>{title}</h2>
      <p>{setPriceFormat(price)}</p>
      <p className='text-right'>
        <Link
          className='py-1 px-4 border text-sm font-thin border-blue-900 rounded-full hover:bg-blue-900 hover:text-white'
          to={`/item/${id}`}
        >
          Ver detalles
        </Link>
      </p>
    </div>
  )
}