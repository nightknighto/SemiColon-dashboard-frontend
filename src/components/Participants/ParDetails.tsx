import { parDataTypes } from '../../interfaces/parDataTypes'
import classes from './ParDetails.module.css'

const ParDetails = ({ par }: { par: parDataTypes }) => {
  return (
    <div className={classes.details}>
      <h2>{par.name}</h2>
      <p><span>First Preference: </span>{par.firstPreference}</p>
      <p><span>Reason: </span>{par.firstPrefReason}</p>
      <p><span>Knowlege: </span>{par.firstPrefKnowledge}</p>
      <p><span>Second Preference: </span>{par.secondPreference}</p>
      <p><span>Reason: </span>{par.secondPrefReason}</p>
      <p><span>Experience: </span>{par.pastExperience}</p>
    </div>
  )
}

export default ParDetails
