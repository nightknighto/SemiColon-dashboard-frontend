import Header from './components/UI/Header/Header'
import Stats from './components/Stats/Stats'
import Charts from './components/Charts/Charts'
import { useState } from 'react'

import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'

function App() {
  const tracks = [
    'Web Track-Basic',
    'Web Track-Advanced',
    'Embedded Track-Basic',
    'Embedded Track-Advanced',
  ]
  return (
    <>
      {/* <Header />
      <Charts />
      <Stats tracks={tracks} /> */}
      <Login />
      {/* < Dashboard /> */}
    </>
  )
}

export default App
