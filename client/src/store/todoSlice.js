import {createSlice} from '@reduxjs/toolkit'
import { useState } from 'react';

const todoSlice = createSlice({
   
   name:'todos',
   initialState:{
      todos:[]
   },
   reducers: {
      addTodo(state, action) {
         console.log(action)
         console.log(state)
          state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            completed: false,
          });
      },
      deleteTodo(state, action) { 
         state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      },
      toggleComplete(state, action) {
         const toggleCompleted = state.todos.find(todo => todo.id === action.payload.id)
         toggleCompleted.completed = !toggleCompleted.completed
      }
   }
})

export const {addTodo, deleteTodo, toggleComplete} = todoSlice.actions 
export default todoSlice.reducer