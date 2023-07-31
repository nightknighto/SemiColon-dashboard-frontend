import Stats from '../features/participants/Stats/Stats'

import Admin from '../features/users/Admin/Admin'
import Login from '../features/auth/Login/Login'
import DataContextProvider from '../common/context/DataContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { tracks } from '../common/types/tracks'
import Header from '../common/components/Header/Header'
import Participants from '../features/participants/Participants/Participants'
import Charts from '../features/participants/Charts/Charts'

function App() {
  return (
    <BrowserRouter basename="SemiColon-dashboard-frontend">
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
