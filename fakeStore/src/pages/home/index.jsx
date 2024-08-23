import {useState, useEffect} from 'react'
import Card from '../../components/utilidades/Card';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error:', error));

  }, []);
console.log(products)
  return (
    <>
      <div>Home</div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-xl'>
        {products.map((product, index) => (
          <Card key={index} data={product} />
        ))}
      </div>
    </>
  )
}

