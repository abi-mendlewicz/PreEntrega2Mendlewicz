export default function ItemCount({stockState, initial}) {
  const [stock, increment, decrement] = stockState

  return (
    <>
      <p>
        <span className='inline-flex my-2 border border-blue-900 rounded-full'>
          <button
            className='px-4 rounded-l-full hover:bg-blue-900 hover:text-white'
            onClick={decrement}
          >
            -
          </button>
          <span className='px-2 text-lg'>{initial}</span>
          <button
            className='px-4 rounded-r-full hover:bg-blue-900 hover:text-white'
            onClick={increment}
          >
            +
          </button>
        </span>
      </p>
      <p className='text-sm italic'>
        Queda{stock == 1 ? '' : 'n'} {stock} unidad{stock == 1 ? '' : 'es'} en stock.
      </p>
    </>
  )
}