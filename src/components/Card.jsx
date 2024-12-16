import React from 'react'

function Card({values , handleRemove , id}) {
 

  return (
    <div className='w-72 h-full px-2 py-2 bg-zinc-100 rounded-lg'>
        <div className='w-full px-4 py-2 '>
          <h3 className=' font-semibold'> {values.name} </h3>
          <h4 className='opacity-40 '>{values.email}</h4>
        </div>
        <div className='w-full h-40 bg-zinc-100' >
          <img className='w-full h-full object-cover' src={values.image} alt="please provide correct url" />
        </div>
        <div className='w-full  pt-2  ' ><p className='text-xs font-bold leading-1  pr-2'>{values.description}</p>
        <button onClick={()=> handleRemove(id)} className='px-4 py-2 text-xs font-semibold text-white mt-5 bg-red-500 rounded-lg outline-none'>Remove It </button>
        </div>
    </div>
  )
}

export default Card