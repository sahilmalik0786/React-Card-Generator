import React from 'react'
import Card from './card'

function Cards({cardData , handleRemove}) {
  return (
    <div className='w-[80%] max-h-[400px] py-2  flex items-center justify-center gap-10 flex-wrap overflow-auto  top-10'>
        
      

     {cardData.map((item , index )=>{
      return <Card id = {index}  handleRemove = {handleRemove} values={item} key={index} />
       console.log(item)
     }
    
    )}
      
      
      
         
         
          </div>
  )
}

export default Cards