export default function Card({data}) {
  return (
    <div className='bg-white cursor w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
            <img  className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} />
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.title}</span>
            <span className='text-lg font-medium'>${data.price}</span>
        </p>
    </div>
  )
}
