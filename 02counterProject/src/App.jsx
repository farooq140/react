import { useState } from 'react'
import './App.css'
function App() {
  const [counter,setCounter]=useState(5)
  if(counter<0){
    setCounter(0)
  }
  if(counter>20){
    setCounter(20)
  }
const  addValue = () => {
  setCounter(counter+1)
    /
  console.log(counter)
    
  }
  const  decValue = () => {
   setCounter(counter-1)
    console.log(counter)
    
  }

  return (
    <>
      <h1>React cource</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Add value</button>
      <br /><br />
      <button onClick={decValue}>decrease value</button>
    </>
  )
}

export default App
