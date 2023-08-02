import { User } from '../types/User';
import classes from './AllUsers.module.css'
import UserItem from './UserItem';

interface AllUsersProps {
  data: User[],
  onChoose: (id: string) => void
}

const AllUsers = ({ data, onChoose } : AllUsersProps) => {

    let output;
    if (data[0]) {
        output = (
          <div>
            {data.map((item) => (
              <UserItem
                key={item._id}
                name={item.username}
                onChoose={onChoose.bind(null, item._id)}
              />
            ))}
          </div>
        )
      }
    return <div className={classes['all-users']}>{output}</div>;
}
 
export default AllUsers;