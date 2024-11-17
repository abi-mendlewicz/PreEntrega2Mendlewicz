import { NavLink } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div className='container mx-auto py-6 px-4 text-blue-900'>
      <p className='text-3xl'>404</p>
      <p className='my-4'>Te encuentras perdido...</p>
      <NavLink
        className={'py-1 px-4 border text-sm font-thin border-blue-900 rounded-full hover:bg-blue-900 hover:text-white'}
        to={'/'}
      >
        Volver al inicio
      </NavLink>
    </div>
  )
}