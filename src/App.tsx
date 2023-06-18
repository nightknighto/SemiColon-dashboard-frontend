import Header from './components/UI/Header/Header'
import Stats from './components/Stats/Stats'
import Charts from './components/Charts/Charts'

import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import Participants from './components/Participants/Participants'
import DataContextProvider from './context/DataContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { tracks } from './types/tracks'

function App() {
  return (
    <BrowserRouter basename='SemiColon-dashboard-frontend'>
      <DataContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <>
                <Header />
                <Admin />
              </>
            }
          />
          <Route
            path="/participants"
            element={
              <>
                <Header />
                <Participants />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Charts />
                <Stats tracks={tracks} />
              </>
            }
          />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
