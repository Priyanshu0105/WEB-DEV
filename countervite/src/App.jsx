import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0);
//  let counter = 15;

  let addValue = ()=>{
    if(counter < 20 ){
    setCounter(counter + 1);}
    else{
      setCounter(20)
    }
  }
  let removeValue = () =>{
    if(counter > 0){
    setCounter(counter - 1);}
    else{
      setCounter(0);
    }
  }
  return (
    <>
      <h1>react haha</h1>
      <h2 id = "counter">Counter Value : {counter}</h2>
      <button id = "add" onClick={addValue}>ADD VALUE</button>
      <br />
      <button id = "remove" onClick={removeValue}>REMOVE VALUE</button>
    </>
  )
}

export default App
