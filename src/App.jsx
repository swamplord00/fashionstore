import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { MainRouter } from './routes/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <MainRouter/>
    </>
  )
}

export default App
