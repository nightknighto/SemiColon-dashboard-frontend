import Stats from '../features/participants/Stats/Stats'

import Admin from '../features/users/Admin/Admin'
import Login from '../features/auth/Login/Login'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { tracks } from '../common/types/tracks'
import Header from '../common/components/Header/Header'
import Participants from '../features/participants/Participants/Participants'
import Charts from '../features/participants/Charts/Charts'
import { useAppDispatch } from './hooks'
import { useEffect } from 'react'
import { fetchParticipants } from '../features/participants/participantSlice'

function App() {

    const nav = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchParticipants(nav))
    }, [])
        
    return (
        <Routes>
            <Route 
                path="/login" 
                element={<Login />} 
            />
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
    )
}

export default App
