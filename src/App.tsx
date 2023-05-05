import Header from './components/UI/Header/Header'
import Stats from './components/Stats/Stats'
import Charts from './components/Charts/Charts'
import Login from './components/Login/Login'
import Participants from './components/Participants/Participants'
import DataContextProvider from './context/DataContextProvider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const tracks = [
  'webDev1',
  'webDev2',
  'Embedded Track-Basic',
  'Embedded Track-Advanced',
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/stats',
    element: (
      <DataContextProvider>
        <Header />
        <Charts />
        <Stats tracks={tracks} />
      </DataContextProvider>
    ),
  },
  {
    path: '/participants',
    element: (
      <DataContextProvider>
        <Header />
        <Participants />
      </DataContextProvider>
    ),
  },
], {
  basename: '/SemiColon-dashboard-frontend',
})

function App() {
function App() {
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
      <RouterProvider router={router} />
    </DataContextProvider>
  )
}

export default App
