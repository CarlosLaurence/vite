import React, { useContext } from 'react'
import { ShopiContext } from '../../components/context';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import OrderCard from '../../components/utilidades/OrderCard';

export default function MyOrder() {
  const context = useContext(ShopiContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if(index === 'last') index = context.orders?.length - 1;

  return (
    <div>
      <div className='flex items-center justify-center w-80 relative mb-4'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className='font-medium text-xl'>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {context.orders && context.orders.length > 0 ? context.orders?.[index]?.products.map(product => (
            <OrderCard key={product.id} id={product.id} title={product.title} price={product.price} imageUrl={product.image}/>
        )): <p>No hay productos en la orden.</p>}
      </div>
    </div>
  )
}
