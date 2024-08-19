import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink to="/">Shopi</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink to="/dfgj">All</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink to="/dfgdf">Clothes</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink to="/fdghdfhd">Electronics</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink to="/sadasf">Furnitures</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink>Toys</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink>Other</NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink>My order</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink>My Orders</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink>My Account</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink>Sing In</NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink></NavLink>
            </li>
        </ul>
    </nav>
  )
}
