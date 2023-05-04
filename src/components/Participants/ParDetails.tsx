import { parDataTypes } from '../../interfaces/parDataTypes'
import classes from './ParDetails.module.css'

const ParDetails = ({ par }: { par: parDataTypes }) => {
  return (
    <div className={classes.details}>
      <h2>{par.name}</h2>
      <div className={classes.parData}>
        <p>
          <span className={classes.bold}>Email: </span>
          {par.email}
        </p>
        <p>
          <span className={classes.bold}>Phone: </span>
          {par.phone}
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
        {par.status && (
          <p className={`${classes.pending} ${classes[par.status]}`}>
            {par.status}
          </p>
        )}
      </div>
    </div>
  )
}

export default ParDetails
