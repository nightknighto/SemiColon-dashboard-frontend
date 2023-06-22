import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { authHeader } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";
import classes from './Admin.module.css'
import UserDetails from "./UserDetails";

const Admin = () => {
    const nav = useNavigate()
    const [userData, setUserData] = useState(null);
    


    useEffect(() => {
        const hdrs = authHeader()
        if (hdrs) {
            fetch("https://semicolon-registration-backend.onrender.com/user/getAll", {headers: hdrs})
            .then(data => data.json())
            .then(data => setUserData(data));
        } else {
            nav("/login")
        }
    }, []);

    return (
        <Card className={classes['admin-container']}>
            <AllUsers />
            <UserDetails />
        </Card>
    );
}
 
export default Admin;