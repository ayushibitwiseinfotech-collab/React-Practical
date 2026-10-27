import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "chaiaurcode",
    age: 20,
  }

  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' mb-4>Tailwind Props</h1>
      <Card channel="chaiaurcode" btnText="Click Me" />
      <Card username="Ayushi" />
    </>
  )
}

export default App
