import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
const arr=[1,2,3,4,5]
const username={
  name:"Ali",
  age:25,
  city:"Karachi"
}
  return (
    <>
      <h1 className="bg-slate-400 text-black p-4">
        Tailwind CSS with Props
        </h1> 
        <br/>
           <Card username="farooq" myArr={arr} someObj={username}  btnText="click me" />
           <br/>
           <Card username={"Ahmed"}  />

    </>
  )
}

export default App
