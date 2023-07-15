import classes from './UserItem.module.css'

interface UserItemProps {
  name: string, 
  onChoose: () => void
}

const UserItem = ({ name, onChoose } : UserItemProps) => {

    return (
        <div className={classes.item} onClick={onChoose}>
          <h3>{name}</h3>
        </div>
      )

}
 
export default UserItem;