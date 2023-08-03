import { useEffect } from "react";
import { getRole } from "../../../common/helpers/auth";
import { useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";
import classes from './Admin.module.css'
import UserDetails from "./UserDetails";
import Card from "../../../common/components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchUsers, selectSelectedUser } from "../usersSlice";

const Admin = () => {
    const nav = useNavigate()

    const isAdmin = getRole() === "admin";
    if (!isAdmin) {
      nav("/stats");
    }

    const dispatch = useAppDispatch();
    const selectedUser = useAppSelector(selectSelectedUser);


    useEffect(() => {
      dispatch(fetchUsers())
    }, []);

    return (
        <Card className={classes['admin-container']}>
            <AllUsers />
            { selectedUser && <UserDetails user={selectedUser} /> }
        </Card>
    );
}
 
export default Admin;