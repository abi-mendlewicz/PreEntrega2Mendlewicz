import { CgShoppingCart } from 'react-icons/cg'

export default function CartWidget() {
  function onClickCarritoBtn() {
    alert('Próximamente podrás acceder desde aquí a tu carrito de compras.')
  }
  
  return (
    <button className='relative me-4'>
      <CgShoppingCart className='hover:text-yellow-600' size={24} onClick={onClickCarritoBtn} />
      <span className='absolute -top-3 -right-4 flex justify-center items-center size-6 border-2 rounded-full'>0</span>
    </button>
  )
}