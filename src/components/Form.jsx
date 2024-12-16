import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormData }) {

  const {register , handleSubmit ,reset } = useForm()
  const handleData = (data)=> {
    handleFormData(data)
    reset();
  }  


  return (
    <div className='w-full   flex items-center justify-center px-10 py-4'>
        <form onSubmit={handleSubmit(handleData) } className='flex flex-col '>
            <label className='text-white' htmlFor=""> Name</label>
       <input  {...register("name")} className='rounded-md text-base  px-2 py-2 font-semibold outline-none'  type="text"  placeholder='Name'/>
       <label className='text-white' htmlFor=""> E-mail</label>

       <input  {...register("email")}  className='rounded-md text-base px-2 py-2 font-semibold outline-none'   type="email" placeholder='E-mail' />
       <label className='text-white' htmlFor=""> Image Url</label>

       <input  {...register("image")} className='rounded-md text-base px-2 py-2 font-semibold outline-none'   type="text" placeholder='Image-Url' />
      
       <input  {...register("description" , {maxLength: 30})}  placeholder='TAGS.. Max 25 words' className='mt-4 h-12 p-2 font-semibold  outline-none rounded-md overflow-hidden ' ></input>
      
      <input className='mt-4 bg-green-500 p-3 rounded-md text-white cursor-pointer' type="submit" />

        </form>

    </div>
  )
}

export default Form