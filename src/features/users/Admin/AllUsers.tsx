import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectAllUsers, userSelected } from '../usersSlice';
import classes from './AllUsers.module.css'
import UserItem from './UserItem';

const AllUsers = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAllUsers);

  const onChoose = (id: string) => {
    dispatch(userSelected(id))
  }

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