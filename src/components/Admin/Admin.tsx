import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import { authHeader, getRole } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";
import classes from './Admin.module.css'
import UserDetails from "./UserDetails";
import { User } from "../../types/User";
import axios from "axios";

export type AdminPageMode = "view" | "edit" | "add" 

const Admin = () => {
    const nav = useNavigate()

    const isAdmin = getRole() === "admin";
    if (!isAdmin) {
      nav("/stats");
    }

    const [chosenUser, setChosenUser] = useState<User>();
    const [userData, setUserData] = useState<User[]>([]);
    const [updated, setUpdated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [mode, setMode] = useState<AdminPageMode>("view");

    useEffect(() => {
        const hdrs = authHeader()
        if (hdrs) {
            fetch("https://semicolon-registration-backend.onrender.com/user/getAll", {headers: hdrs})
            .then(data => data.json())
            .then(data => setUserData(data.data));
        } else {
            nav("/login")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeMode = (mode: AdminPageMode) => {
      setMode(mode);
    }

    const onChoose = (id: string) => {
        for (const user of userData) {
          if (user._id === id) {
            setChosenUser(user)
            setMode("view");
            return
          }
        }
      }

      const addUser = async (newUser: {username: string, phone: string, active: boolean, role: string, password: string}) => {
        setLoading(true);
        setError(null);
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
              const result = res.data.data;
              delete result.__v; delete result.createdAt; delete result.updatedAt;
              setChosenUser(result);
              setMode("view");
              setUserData(data => [...data, result]);
            }
          } else {
            nav('/login')
          }
        } catch (err: any) {
          setError(err.response?.data.data);
        } finally {
          setLoading(false);
        }
      }
      const updateUser = async (newUser: User) => {
        setLoading(true);
        setError(null);
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
              setUserData(data => {
                return data.map(user => {
                  if (user._id === newUser._id) {return newUser}
                  return user;
                })
              });
              setChosenUser(newUser);
            }
          } else {
            nav('/login')
          }
        } catch (err: any) {
          setError(err.response?.data.data);
        } finally {
          setLoading(false);
        }
      }

    return (
        <Card className={classes['admin-container']}>
            <AllUsers data={userData} onChoose={onChoose}/>
            { chosenUser && <UserDetails user={chosenUser} updated={updated} addUser={addUser} updateUser={updateUser} mode={mode} setMode={changeMode} loading={loading} error={error}/> }
        </Card>
    );
}
 
export default Admin;