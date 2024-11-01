import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [chrAllowed, setChrAllowed] = useState(false)
  const [password, setPassword] = useState('')
// useRef hook
const  passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let num = "0123456789"
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     let pass=""
     if(numberAllowed){str += num}
      if(chrAllowed){str += "!@#$%^&*()_+<>?:{}"}
      for(let i = 1; i <= length; i++){
        let char=Math.floor(Math.random() * str.length+1)
        pass+=str.charAt(char)
      }
      setPassword(pass)
  },[length, numberAllowed, chrAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, chrAllowed,passwordGenerator])
  
  return (
    <>
     <div className="w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-2xl font-bold text-center text-white my-4">
          Password Generator
        </h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
            <input
              type='text'
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder='Your Password'
              readOnly
              ref={passwordRef}
            />  
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >Copy
          </button> 

        </div>  
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type='range'
              name=""
              min={3}
              max={25}
              value={length}
               crustor="pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label >Length:{length}</label>
            <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
               crustor="pointer"
              onChange={(prev) => setNumberAllowed(!prev)}
            />
            <label htmlFor="">Number</label>  
            </div>
            <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={chrAllowed}
               crustor="pointer"
              onChange={(prev) => setChrAllowed(!prev)}
            />
            <label htmlFor="">Character</label>  
            </div> 

          </div>
        </div>
    </div>
    </>
  )
}

export default App
