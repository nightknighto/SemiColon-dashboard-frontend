import Header from './components/UI/Header/Header'
import Stats from './components/Stats/Stats'

function App() {
  const choices = ['choice A', 'choice B', 'choice C']
  return (
    <>
      <Header />
      <Stats tracks={choices} />
    </>
  )
}

export default App
