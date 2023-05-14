import { parDataTypes } from '../../interfaces/parDataTypes'
import Button from '../UI/Button/Button'
import classes from './ParDetails.module.css'

const ParDetails = ({
  par,
  onAcceptHandler,
  onRejectHandler,
}: {
  par: parDataTypes
  onAcceptHandler: (phone: string) => void
  onRejectHandler: (phone: string) => void
}) => {
  return (
    <div className={classes.details}>
      <h2>{par.name}</h2>
      <div className={classes.parData}>
        <p>
          <span className={classes.bold}>Email: </span>
          {par.email}
        </p>
        <p>
          <span className={classes.bold}>College ID: </span>
          {par.collegeId}
        </p>
        <p>
          <span className={classes.bold}>Phone: </span>
          {par.phone}
        </p>
        <p>
          <span className={classes.bold}>Year: </span>
          {par.year}
        </p>
        <p>
          <span className={classes.bold}>First Preference: </span>
          {par.firstPreference}
        </p>
        <p>
          <span className={classes.bold}>Reason: </span>
          {par.firstPrefReason}
        </p>
        <p>
          <span className={classes.bold}>Knowlege: </span>
          {par.firstPrefKnowledge}
        </p>
        <p>
          <span className={classes.bold}>Second Preference: </span>
          {par.secondPreference}
        </p>
        <p>
          <span className={classes.bold}>Reason: </span>
          {par.secondPrefReason}
        </p>
        <p>
          <span className={classes.bold}>Experience: </span>
          {par.pastExperience}
        </p>
      </div>
      <div className={classes.status}>
        {par.acceptanceStatus && (
          <p className={`${classes.pending} ${classes[par.acceptanceStatus]}`}>
            {par.acceptanceStatus}
          </p>
        )}
      </div>
      <hr className={classes.line}></hr>
      <div className={classes.buttons}>
        <Button onClick={onAcceptHandler.bind(null, par.phone)} className={classes.acceptBtn}>Accept</Button>
        <Button onClick={onRejectHandler.bind(null, par.phone)} className={classes.rejectBtn}>Reject</Button>
      </div>
    </div>
  )
}

export default ParDetails
