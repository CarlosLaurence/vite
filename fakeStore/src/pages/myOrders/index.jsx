import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import OrdersCard from '../../components/utilidades/OrdersCard';
import { ShopiContext } from '../../components/context';

export default function MyOrders() {
  const context = useContext(ShopiContext);
  return (
    <div>
      <div className='flex items-center justify-center w-80 mb-4 relative'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      { context.orders.map((order, index) => (
        <Link key={index} to={`/my-order/${index}`}>
          <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
        </Link>
      ))}
    </div>
  )
}
