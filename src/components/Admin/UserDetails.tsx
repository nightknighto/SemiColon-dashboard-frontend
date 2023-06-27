import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import Button from '../UI/Button/Button';
import classes from './UserDetails.module.css'

const UserDetails = ({user, updated, activateUser, deactivateUser, updateUser}: {user: User, updated: boolean, activateUser: (id: string) => void, deactivateUser: (id: string) => void, updateUser: (user: User)=> void}) => {
  const [phone, setPhone] = useState(user.phone);
  const [username, setUsername] = useState(user.username);
  const [role, setRole] = useState(user.role);
    useEffect(() => {
      setPhone(user.phone);
      setUsername(user.username);
      setRole(user.role);
    }, [user])

    return (
        <div className={classes.parContainer}>
          <div className={classes.details}>
            <div className={classes.userData}>
              <span className={classes.bold}>
                Name:
                <input value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
              </span>
              <p>
                <span className={classes.bold}>
                    Phone: 
                    <input value={phone} onChange={(e) => {setPhone(e.target.value)}}></input>
                </span>
              </p>
              <p>
                <span className={classes.bold}>Status: </span>
                {user.active ? "Active" : "Inactive"}
              </p>
              <p>
                <span className={classes.bold}>Role: </span>
                <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
                  <option value="hr">hr</option>
                  <option value="member">member</option>
                  <option value="admin">admin</option>
                </select>
              </p>
            </div>
          </div>
          <hr className={classes.line}></hr>
          <div className={classes.buttons}>
            <Button
              onClick={() => updateUser({...user, phone: phone, role: role, username: username})}
              className={classes.acceptBtn}
            >
              Update
            </Button>
            {user.active 
            ? <Button
              onClick={() => deactivateUser(user._id)}
              className={classes.rejectBtn}
            >
              Deactivate
            </Button>
            : 
            <Button
              onClick={() => activateUser(user._id)}
            className={classes.acceptBtn}
            >
              Activate
            </Button>
            }
          </div>
          {updated && <div>Updated!</div>}
        </div>
      )
}
 
export default UserDetails;