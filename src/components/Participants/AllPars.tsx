import { parDataTypes } from '../../interfaces/parDataTypes'
import classes from './AllPars.module.css'
import ParItem from './ParItem'

const AllPars = ({ data }: { data: parDataTypes[] }) => {
  const onChoose = (_id: string) => {
    return
  }

  let output
  if (data[0]) {
    output = data.map((item) => (
      <ParItem
        key={item.name}
        name={item.name}
        onChoose={onChoose.bind(null, item._id)}
      />
    ))
  }
  return <div className={classes['all-pars']}>{output}</div>
}

export default AllPars
