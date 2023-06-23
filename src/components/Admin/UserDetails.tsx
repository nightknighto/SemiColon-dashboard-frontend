import { User } from '../../types/User';
import Button from '../UI/Button/Button';
import classes from './UserDetails.module.css'

const UserDetails = ({user, activateUser, deactivateUser}: {user: User, activateUser: (id: string) => void, deactivateUser: (id: string) => void}) => {
    return (
        <div className={classes.parContainer}>
          <div className={classes.details}>
            <h2>{user.username}</h2>
            <div className={classes.userData}>
              <p>
                <span className={classes.bold}>Phone: </span>
                {user.phone}
              </p>
              <p>
                <span className={classes.bold}>Status: </span>
                {user.active ? "Active" : "Inactive"}
              </p>
              <p>
                <span className={classes.bold}>Role: </span>
                {user.role}
              </p>
            </div>
          </div>
          <hr className={classes.line}></hr>
          <div className={classes.buttons}>
            <Button
              // onClick={() => statusChangeHandler({...user})}
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
        </div>
      )
}
 
export default UserDetails;