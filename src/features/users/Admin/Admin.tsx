import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AllUsers from './AllUsers'
import classes from './Admin.module.css'
import UserDetails from './UserDetails'
import Card from '../../../common/components/Card/Card'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  fetchUsers,
  selectReadyToFetchUsersBool,
  selectSelectedUser,
} from '../usersSlice'

const Admin = () => {
  const nav = useNavigate()
  const isAdmin = useAppSelector((state) => state.auth.role === 'admin')
  useEffect(() => {
    if (!isAdmin) {
      nav('/stats')
    }
  }, [isAdmin])

  const dispatch = useAppDispatch()
  const selectedUser = useAppSelector(selectSelectedUser)
  const readyToFetch = useAppSelector(selectReadyToFetchUsersBool)

  useEffect(() => {
    if (readyToFetch) dispatch(fetchUsers())
  }, [])

  return (
    <Card className={classes['admin-container']}>
      <AllUsers />
      {selectedUser && <UserDetails user={selectedUser} />}
    </Card>
  )
}

export default Admin
