import Card from './components/UI/Card/Card'
import Header from './components/UI/Header/Header'
import Button from './components/UI/Button/Button'

function App() {
  return (
    <>
      <Header />
      <Card>
        <h1>Hello</h1>
        <Button onClick={null} disabled={false}>
          Submit
        </Button>
      </Card>
    </>
  )
}

export default App
