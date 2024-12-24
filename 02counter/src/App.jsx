import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  }

  const remvalue = () => {
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai and react</h1>
      <h2>Counter value: { counter }</h2>
      <h2>Counter value: { counter }</h2>
      <h2>Counter value: { counter }</h2>
      <h2>Counter value: { counter }</h2>
      <h2>Counter value: { counter }</h2>
      <button onClick={addValue}>Add value</button> <br />
      <button onClick={remvalue}>Remove value</button>
    </>
  )
}

export default App
