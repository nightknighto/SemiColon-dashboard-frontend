import { useEffect, useState } from 'react';
import { User, UserRole } from '../types/User';
import classes from './UserDetails.module.css'
import Button from '../../../common/components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { AdminPageMode, createUser, pageModeChanged, updateUser } from '../usersSlice';

interface UserDetailsProps {
  user: User,
}

const UserDetails = ({ user }: UserDetailsProps) => {

  const dispatch = useAppDispatch();
  const pageMode = useAppSelector(state => state.users.pageMode)

  const [phone, setPhone] = useState(user.phone);
  const [username, setUsername] = useState(user.username);
  const [role, setRole] = useState(user.role);
  const [active, setActive] = useState(user.active);
  const [password, setPassword] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const [updated, setUpdated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addUser = async (newUser: Omit<User, '_id'>) => {
    setLoading(true);
    setError(null);
    try{
      await dispatch(createUser(newUser)).unwrap();
    } catch(err: any) {
      setError(err.response?.data.data);
    } finally {
      setLoading(false);
    }
  }
    
  const handleUpdateUser = async (newUser: User) => {
    setLoading(true);
    setError(null);
    try {
      await dispatch(updateUser(newUser)).unwrap();
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 1500);
    } catch (err: any) {
      setError(err.response?.data.data);
    } finally {
      setLoading(false);
    }
  }

    useEffect(() => {
      setPhone(user.phone);
      setUsername(user.username);
      setRole(user.role);
      setActive(user.active)
    }, [user])

    function setPageMode(mode: AdminPageMode) {
      dispatch(pageModeChanged(mode));
    }

    return (
        <div className={classes.userContainer}>
          <div className={classes.details}>
            <div className={classes.userData}>
              <span className={classes.bold}>
                Name:{" "}
                {pageMode==="view" && username}
                {pageMode==="edit" && <input value={username} onChange={(e) => {setUsername(e.target.value)}}></input>}
                {pageMode==="add" && <input value={newUsername} onChange={(e) => {setNewUsername(e.target.value)}}></input>}
              </span>
              <p>
                <span className={classes.bold}>
                    Phone:{" "}
                    {pageMode==="view" && phone}
                    {pageMode==="edit" && <input value={phone} onChange={(e) => {setPhone(e.target.value)}}></input>}
                    {pageMode==="add" && <input value={newPhone} onChange={(e) => {setNewPhone(e.target.value)}}></input>}
                </span>
              </p>
              <p>
                <span className={classes.bold}>Status: </span>
                {pageMode==="view" && (user.active ? "Active" : "Inactive")}
                {pageMode!=="view" && 
                <select value={active ? "active" : "inactive"} onChange={(e)=>{setActive(e.target.value==="active")}}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                }
              </p>
              <p>
                <span className={classes.bold}>Role: </span>
                {(pageMode ==="view") && role}
                {pageMode!=="view" && <select value={role} onChange={(e)=>{setRole(e.target.value as UserRole)}}>
                  <option value="hr">hr</option>
                  <option value="member">member</option>
                </select>}
              </p>
              {pageMode==="add" && <p>
                <span className={classes.bold}>Password: </span>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                
              </p>}
            </div>
          </div>

          <hr className={classes.line}></hr>

          <div className={classes.buttons}>
            {pageMode==="edit" &&
            <>
              <Button
              onClick={() => handleUpdateUser({...user, phone: phone, role: role, username: username, active: active})}
              className={classes.acceptBtn}
              disabled={loading}
              >
              Update
            </Button>
            <Button
              onClick={() => {setPageMode("view")}}
              className={classes.rejectBtn}
              >
              Cancel
            </Button> 
            </>
            }
            {pageMode==="view" &&
            <Button onClick={() => {setPageMode("add")}} className={classes.acceptBtn}>
                Add user
            </Button>}
            {pageMode==="view" && role !== "admin" &&
            <Button onClick={() => {setPageMode("edit")}} className={classes.passiveBtn} disabled={user._id===""}>
                Edit
            </Button>
            }
            {pageMode==="add" && 
            <>
            <Button onClick={() => {addUser({username: newUsername, phone: newPhone, active: active, role: role, password: password})}} className={classes.acceptBtn} disabled={loading}>
                Add
            </Button>
            <Button onClick={() => {setPageMode("view")}} className={classes.rejectBtn}>
                Cancel
            </Button>
            </>
            }
          </div>
          {updated && <div>Updated!</div>}
          {loading && <div>Loading...</div>}
          {error && <p className={classes.error}><h3>Error Occured:</h3>{error}</p>}
        </div>
      )
}
 
export default UserDetails;