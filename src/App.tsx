import Card from './components/UI/Card/Card'
import Header from './components/UI/Header/Header'
import Button from './components/UI/Button/Button'
import Stats from './components/Stats/Stats'
import DropDown from './components/UI/DropDown/DropDown'

function App() {
  const choices = ['choice A', 'choice B', 'choice C']
  return (
    <>
      <Header />
      <Stats />
      <Card>
        <DropDown choices={choices} />
      </Card>
    </>
  )
}

export default App
