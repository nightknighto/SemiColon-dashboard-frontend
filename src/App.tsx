import Header from './components/UI/Header/Header'
import Stats from './components/Stats/Stats'
import Charts from './components/Charts/Charts'

function App() {
  const tracks = [
    'Web Track-Basic',
    'Web Track-Advanced',
    'Embedded Track-Basic',
    'Embedded Track-Advanced',
  ]
  return (
    <>
      <Header />
      <Charts />
      <Stats tracks={tracks} />
    </>
  )
}

export default App
