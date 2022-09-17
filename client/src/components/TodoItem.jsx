import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo} from '../store/todoSlice';

const TodoItem = ({id, text}) => {
  const dispatch = useDispatch()

  return (
    <li class="flex mt-2 flex-row items-end justify-between text-xl rounded-lg  hover:bg-slate-300 shadow-lg">
            <span  
               className={'px-2 text-center text-black'}>{text}
            </span>
            <span 
               onClick={() => {
                dispatch(deleteTodo({id}))}}  
               className='cursor-pointer  text-red-600'>
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </span>
    </li>
  )
}

export default TodoItem