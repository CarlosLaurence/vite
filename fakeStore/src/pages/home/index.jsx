import { useContext } from 'react'
import Card from '../../components/utilidades/Card';
import { ShopiContext } from '../../components/context';
import ProductDetail from '../../components/utilidades/ProductDetail';

export default function Home() {

  const context = useContext(ShopiContext);
  
  return (
    <>
      <div>Home</div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-xl'>
        {context.items.map((product, index) => (
          <Card key={index} data={product} />
        ))}
      </div>
      <ProductDetail />
    </>
  )
}

