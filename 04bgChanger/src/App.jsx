import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [bgColor, setBgColor] = useState('black')
   document.body.style.backgroundColor = bgColor;
  const bgWhite = () => {
    setBgColor('white')
  }
  const bgRed = () => {
    setBgColor('red')
  }
  const bgGreen = () => {
    setBgColor('green')
  }
  const bgBlue = () => {
    setBgColor('blue')
  }
  return (
    <>
     <div className='bg-white p-5 rounded-lg ' >
      <button className='p-2 rounded bg-white m-2 color  border-black ml-2' onClick={bgWhite}>white</button> 
      <button className='p-2 rounded bg-red-500 text-white ml-5' onClick={bgRed}>Red</button>
      <button className='p-2 rounded bg-green-500 text-white ml-5' onClick={bgGreen}>Green</button>
      <button className='p-2 rounded bg-blue-700 text-white ml-5' onClick={bgBlue}>Blue</button>


    </div>
    </>
  )
}

export default App
