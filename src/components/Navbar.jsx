import Logo from './Logo'
import CategoriesNav from './CategoriesNav'
import CartWidget from './CartWidget'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center py-2 px-6 bg-blue-900 text-white'>
      <div>
        <Logo />
      </div>
      <div className='flex gap-x-4'>
        <CategoriesNav />
        <CartWidget />
      </div>
    </div>
  )
}