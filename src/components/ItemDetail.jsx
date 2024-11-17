import ItemCount from './ItemCount'

export default function ItemDeatail({data, quantity, stockState, setPriceFormat}) {
  const {title, description, price, pictureUrl} = data
  
  return (
    <div className='container flex flex-wrap mx-auto py-6 px-4'>
      <div className='basis-full mb-4 sm:basis-1/2'>
        <img src={pictureUrl} alt={title} className='rounded-3xl' />
      </div>
      <div className='basis-full sm:basis-1/2 ps-6 text-blue-900'>
        <h1 className='pb-4 text-3xl font-bold'>{title}</h1>
        <p>{description}</p>
        <p className='py-4 text-xl font-semibold'>{setPriceFormat(price)}</p>
        <ItemCount
          stockState={stockState}
          initial={quantity}
        />
      </div>
    </div>
  )
}