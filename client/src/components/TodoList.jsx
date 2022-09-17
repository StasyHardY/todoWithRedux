import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import {useDispatch, useSelector} from 'react-redux'
import { deleteTodo, toggleComplete } from '../store/todoSlice'


const TodoList = ({  done }) => {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todos.todos)
  

  
  return (
    <ul>
      {
         todo.map(todos => 
         <TodoItem 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}
            {...todos} 
         />)
      }
      <div class="py-2">
         <p className='text-black text-xl'>Всего задач: {todo.length}</p>
      </div>
    </ul>
  )
}

export default TodoList