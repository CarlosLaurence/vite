import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShopiContext } from '../context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
    const context = useContext(ShopiContext);
    const activeStyle = "underline underline-offset-8";
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink to="/" className={({isActive}) => isActive ? activeStyle : undefined }>Shopi</NavLink>
            </li>
            <li>
                <NavLink to="/sdasd" className={({isActive}) => isActive ? activeStyle : undefined }>All</NavLink>
            </li>
            <li>
                <NavLink to="/dfs" className={({isActive}) => isActive ? activeStyle : undefined }>Clothes</NavLink>
            </li>
            <li>
                <NavLink to="/d" className={({isActive}) => isActive ? activeStyle : undefined }>Electronics</NavLink>
            </li>
            <li>
                <NavLink to="/f" className={({isActive}) => isActive ? activeStyle : undefined }>Furnitures</NavLink>
            </li>
            <li>
                <NavLink to="/a" className={({isActive}) => isActive ? activeStyle : undefined }>Toys</NavLink>
            </li>
            <li>
                <NavLink to="/s" className={({isActive}) => isActive ? activeStyle : undefined }>Other</NavLink>
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
                <NavLink>Sign In</NavLink>
            </li>
            <li className='flex justify-center items-center'>
                <ShoppingBagIcon className='size-6'/>
                <div>{context.cartProducts.length}</div>
            </li>
        </ul>
    </nav>
  )
}
