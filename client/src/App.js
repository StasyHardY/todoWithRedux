import { useState } from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import {useDispatch} from 'react-redux'
import {addTodo} from './store/todoSlice'


function App() {


  const [text, setText] = useState('')
  const dispatch = useDispatch()
  
  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }
  

 

  // const toggleComplete = (id) => {
     

  //   setTodos(
  //     todos.map(todo => {
  //       if(todo.id !== id) {
  //         return todo
  //       }
  //       else {
  //         return {
  //           ...todo,
  //           complete: !todo.complete
  //         }
  //       }
  //     })
  //   )
  // }

  return (
    <div className='py-2 px-2 flex items-start justify-center flex-col'>
      <InputField 
        addTodo={addTask} 
        text={text} 
        handleInput={setText}   
      />

      <TodoList/>
    </div>
  );
}

export default App;
