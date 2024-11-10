import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todo from './components/Todo'
// D:\dev\react\redexToolKitTodo\src\components\addTodo.jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        learn react-redux-toolkit
      </h1>    
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
