import Header from './components/UI/Header/Header'
import Stats from './components/Stats/Stats'
import Charts from './components/Charts/Charts'
import Login from './components/Login/Login'
import Participants from './components/Participants/Participants'
import DataContextProvider from './context/DataContextProvider'

function App() {

  const tracks = [
    'webDev1',
    'Web Track-Advanced',
    'Embedded Track-Basic',
    'Embedded Track-Advanced',
  ]

  const numbers: number[] = []

  return (
    <DataContextProvider>
      <Header />
      <Charts />
      <Stats tracks={tracks} />
      <Participants />
      {/* < Dashboard /> */}
    </DataContextProvider>
  )
}

export default App
