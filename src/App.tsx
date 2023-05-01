import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      {/* < Dashboard /> */}
    </>
  )
}

export default App
