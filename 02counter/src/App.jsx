import { useState } from 'react'


function App() {

  let [counter, setCounter] = useState(200);

  //let counter=5
 
  const addValue=()=>{
    console.log("clicked", counter);
    //counter+=1
    setCounter((prevCounter)=> prevCounter + 1);
    setCounter((prevCounter)=> prevCounter + 1);
    setCounter((prevCounter)=> prevCounter + 1);
    setCounter((prevCounter)=> prevCounter + 1);
    

  }

  const removeValue=()=>{
    setCounter((prevCounter)=> prevCounter - 1);
  }

  return (
    <>
      <h1>O2 Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
