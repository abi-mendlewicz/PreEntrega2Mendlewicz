import ItemCard from './ItemCard'

export default function ItemList({data, setPriceFormat}) {
  const productList = data.map(product => 
    <ItemCard
      className=''
      key={product.id}
      {...product}
      setPriceFormat={setPriceFormat}
    />
  )

  return (
    <>
      <div className='container mx-auto py-4 px-6'>
        <h1 className="py-4 px-6 text-3xl text-blue-900 font-bold">
          Productos
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn'>
          {productList}
        </div>
      </div>
    </>
  )
}