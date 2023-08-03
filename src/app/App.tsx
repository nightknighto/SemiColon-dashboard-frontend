import Stats from '../features/participants/Stats/Stats'

import Admin from '../features/users/Admin/Admin'
import Login from '../features/auth/Login/Login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { tracks } from '../common/types/tracks'
import Header from './Header/Header'
import Participants from '../features/participants/Participants/Participants'
import Charts from '../features/participants/Charts/Charts'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { fetchParticipants } from '../features/participants/participantSlice'
import { loadSavedLogin, selectAuth } from '../features/auth/authSlice'

function App() {

    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const auth = useAppSelector(selectAuth)
    
    useEffect(() => {
        (async () => {
            if(!auth.token && !dispatch(loadSavedLogin())) {
                nav('/login')
            } else {
                dispatch(fetchParticipants())
            }
        })()
    }, [auth])
        
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
