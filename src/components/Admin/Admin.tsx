import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { authHeader } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";
import classes from './Admin.module.css'
import UserDetails from "./UserDetails";
import { User } from "../../types/User";
import axios from "axios";

const Admin = () => {
    const nav = useNavigate()
    const [chosenUser, setChosenUser] = useState<User>({
        _id: '',
        active: false,
        password: '',
        phone: '',
        role: 'hr',
        username: ''
    });
    const [userData, setUserData] = useState<User[]>([]);
    const [updated, setUpdated] = useState<boolean>(false);
    const [mode, setMode] = useState("view");

    useEffect(() => {
        const hdrs = authHeader()
        if (hdrs) {
            fetch("https://semicolon-registration-backend.onrender.com/user/getAll", {headers: hdrs})
            .then(data => data.json())
            .then(data => setUserData(data.data));
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

      const addUser = async (newUser: {username: string, phone: string, active: boolean, role: string, password: string}) => {
        console.log(newUser);
        try {
          const headers = authHeader()
          if (headers) {
            const res = await axios.post(
              'https://semicolon-registration-backend.onrender.com/user/',
              {
                ...newUser
              },
              {
                headers,
              }
            )
            if (res.data.status === "success") {
              setChosenUser({...chosenUser, active: res.data.data.active});
              setUserData((data) => {
                return data.map((user) => {
                  if (user._id === chosenUser._id) {return chosenUser}
                  return user;
                })
              })
            }
          } else {
            nav('/login')
          }
        } catch (err) {
          alert(`Error occured: ${err}`)
        }
      }
      const updateUser = async (newUser: User) => {
        try {
          const headers = authHeader()
          if (headers) {
            const res = await axios.patch(
              'https://semicolon-registration-backend.onrender.com/user/update/'+newUser._id,
              {
                ...newUser
              },
              {
                headers,
              }
            )
            if (res.data.status === "success") {
              setUpdated(true);
              setMode("view");
              setTimeout(() => {
                setUpdated(false);
              }, 1500);
            }
          } else {
            nav('/login')
          }
        } catch (err) {
          alert(`Error occured: ${err}`)
        }
      }

    return (
        <Card className={classes['admin-container']}>
            <AllUsers data={userData} onChoose={onChoose}/>
            <UserDetails user={chosenUser} updated={updated} addUser={addUser} updateUser={updateUser} mode={mode} setMode={setMode}/>
        </Card>
    );
}
 
export default Admin;