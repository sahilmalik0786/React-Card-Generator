import React, { useState } from 'react'
import Cards from './components/cards'
import Form from './components/form'


function App() {

 

   const [cardData , setCardData] = useState([])
   function handleData(data) {
      setCardData([...cardData , data])
    
   }

   const handleRemove = (id)=>{
    setCardData(()=>cardData.filter((item ,index)=> index!=id))
   }

  return (
    <div className='w-ful h-screen bg-zinc-900 flex items-center gap-5 justify-around flex-col '>
     
     <Cards handleRemove = {handleRemove} cardData ={cardData}  />
     <Form handleFormData = {handleData}  />
         
    </div>
  )
}

export default App