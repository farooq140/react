import { useEffect, useState } from 'react'
import './App.css'
import {TodoForm,TodoItem} from './components/index'
import { TodoProvider } from './context'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo=(todo)=>{
    setTodos((prevTodo)=>[{id:Date.now(),...todo},...prevTodo])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prevTodo)=>
      prevTodo.map((preTodo)=>preTodo.id===id?preTodo:todo))
  }
const deleteTodo=(id)=>{
  setTodos((prevTodo)=>prevTodo.filter((preTodo)=>preTodo.id!==id))
}
const toggleTodo=(id)=>{
setTodos((prevTodo)=>prevTodo.map((preTodo)=>
  preTodo===id?{...preTodo,completed:!preTodo.completed}:preTodo)) 
}
useEffect(()=>{
  const todos= JSON.parse(localStorage.getItem("todos"))
  if(todos&& todos.length>0){
    setTodos(todos)
  }
},[])
  
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>{

                          return<div className='w-full' key={todo.id} ><TodoItem/> </div>
                        })}
                    </div>
                </div>
      </div>
    </TodoProvider>
  )
}

export default App
