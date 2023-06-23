import { User } from '../../types/User';
import Button from '../UI/Button/Button';
import classes from './UserDetails.module.css'

const UserDetails = ({user}: {user: User}) => {
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
            //   onClick={() => statusChangeHandler(user.phone, StatusEnum.FILTERED)}
              className={classes.rejectBtn}
            >
              Filter
            </Button>
            <Button
            //   onClick={() => statusChangeHandler(user.phone, StatusEnum.EMAILED)}
              className={classes.passiveBtn}
            >
              Emailed
            </Button>
            <Button
            //   onClick={() => statusChangeHandler(user.phone, StatusEnum.SCHEDULED)}
              className={classes.passiveBtn}
            >
              Scheduled
            </Button>
            <Button
            //   onClick={() => statusChangeHandler(user.phone, StatusEnum.ACCEPTED)}
              className={classes.acceptBtn}
            >
              Accept
            </Button>
            <Button
            //   onClick={() => statusChangeHandler(user.phone, StatusEnum.SECONDPREF)}
              className={classes.secondPrefBtn}
            >
              2nd Pref
            </Button>
            <Button
            //   onClick={() => statusChangeHandler(user.phone, StatusEnum.REJECTED)}
              className={classes.rejectBtn}
            >
              Reject
            </Button>
          </div>
        </div>
      )
}
 
export default UserDetails;