import { NavLink } from 'react-router-dom'

export default function CategoriesNav() {
  const linkClass = 'cursor-pointer hover:text-yellow-400'
  const setLinkClass = isActive => isActive ? 'font-bold text-yellow-600' : ''

  return (
    <ul className='flex gap-x-4'>
      <li className={linkClass}>
        <NavLink
          className={({isActive}) => setLinkClass(isActive)}
          to='/category/all'
        >
          Todo
        </NavLink>
      </li>
      <li className={linkClass}>
        <NavLink
          className={({isActive}) => setLinkClass(isActive)}
          to='/category/perro'
        >
          Perro
        </NavLink>
      </li>
      <li className={linkClass}>
        <NavLink
          className={({isActive}) => setLinkClass(isActive)}
          to='/category/gato'
        >
          Gato
        </NavLink>
      </li>
      <li className={linkClass}>
        <NavLink
          className={({isActive}) => setLinkClass(isActive)}
          to='/category/otros'
        >
          Otros
        </NavLink>
      </li>
    </ul>
  )
}