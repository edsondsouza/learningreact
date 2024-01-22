import { useCallback, useState, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "`!@#$%^&*(){}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700">
        <h1 className="text-white text-center p-2 text-2xl font-semibold">Password Generator</h1>
        <div className="flex overflow-hidden mb-4 p-6 outline-none">
          <input type="text"
          value={password}
          className="rounded-lg w-full py-1 px-3 text-black"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipbord} className="rounded-lg outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-3">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mb-6 text-white">
            <input type="range" 
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-6 text-white">
            <input 
            type="checkbox" 
            id="numbersChange" 
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 mb-6 text-white">
            <input 
            type="checkbox" 
            id="charChange" 
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
