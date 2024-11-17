import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer />
    </>
  )
}