import React from 'react'
import { useSelector } from 'react-redux';



const InputField = ({addTodo, text, handleInput}) => {
   const error = {
      message:'Необходимо ввести задачу'
   }
   const todo = useSelector(state => state.todos.todos)
   
  return (
    <label >
      <input 
         className='bg-slate-100 px-2 py-2 rounded-lg placeholder:text-md w-48 h-12 ' 
         value={text}
         placeholder="Enter your today task..." 
         onChange={(e) => handleInput(e.target.value)} 

         />
      <button  
         className='ml-4 w-24 h-12 text-xl  hover:border hover:bg-gray-800 hover:text-white border-orange-500  decoration-1 underline-offset-4 text-black ' 
         onClick={addTodo}
         disabled={text !== '' ? false : true}
      >
         Add todo
      </button>
      {
         text | todo.length 
         ?
            <p className='text-green-500'>Какие задачи хотите выполнить сегодня?</p>
         :
            <p className='text-red-700'>{error.message}</p>
         }
   </label>
  )
}

export default InputField