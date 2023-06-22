import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { authHeader } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";
import classes from './Admin.module.css'
import UserDetails from "./UserDetails";
import { User } from "../../types/User";

const Admin = () => {
    const nav = useNavigate()
    const [chosenUser, setChosenUser] = useState<User>({
        _id: '',
        active: false,
        password: '',
        phone: '',
        role: '',
        username: ''
    });
    const [userData, setUserData] = useState<User[]>([]);

    useEffect(() => {
        const hdrs = authHeader()
        if (hdrs) {
            fetch("https://semicolon-registration-backend.onrender.com/user/getAll", {headers: hdrs})
            .then(data => data.json())
            .then(data => {
                setUserData(data);
                console.log(data);
            });
        } else {
            nav("/login")
        }
    }, []);

    const onChoose = (id: string) => {
        for (const user of userData) {
          if (user._id === id) {
            setChosenUser(user)
            return
          }
        }
      }

    return (
        <Card className={classes['admin-container']}>
            <AllUsers data={userData} onChoose={onChoose}/>
            <UserDetails />
        </Card>
    );
}
 
export default Admin;