import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)
  
  //let Counter = 15

  const addValue = () => {
    if (Counter<20) {
      console.log("clicked",Counter);

    //Counter = Counter + 1
    setCounter(Counter + 1)
    }if (Counter === 14) {
      alert("it is the 14")
    }
    
    
  }
  const removeValue = () => {
    if (Counter>0) {
      console.log("removed", Counter);
    
    setCounter(Counter - 1)
    }if (Counter === 14) {
      alert("it is the 14")
    }
    
  }

  return (
    <>
      <h1>Kishan Pandya</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
