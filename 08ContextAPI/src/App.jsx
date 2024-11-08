import { useState } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
       <h1 className="text-3xl text-center font-bold underline">
        React Context API
    </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
