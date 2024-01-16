import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    if (counter >= 0 && counter < 20) {
      counter = counter + 1
    } 
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter === 0) {
      counter = 0
      setCounter(counter)
    }
    if (counter > 0 && counter <= 20){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button
        onClick={addValue}
      >Add Value: {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
