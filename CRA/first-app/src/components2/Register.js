import {useState} from 'react'
import UserBox from './UserBox'

const userListInitialValues = [
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
  { username: "a ", email: "a@a.com" },
];

const Register = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userList, setUserList] = useState(userListInitialValues)

    const user = {
        username: "almog",
        email: "almoghr36@gmail.com",
      };
    
    const addUser = () => {
      const newList = [...userList]
      newList.unshift(user)
      setUserList(newList)
    }
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            value={isEditMode ? user.username : ""}
            placeholder="enter your username"
          />
          <input
            value={isEditMode ? user.password : ""}
            type="password"
            placeholder="enter your password"
          />
          <input type="password" placeholder="confirm password" />
          <input
            value={isEditMode ? user.email : ""}
            placeholder="enter your email"
          />
    
          <button onClick={() => {setIsEditMode(!isEditMode); console.log(isEditMode)}}>{isEditMode ? "update" : "submit"}</button>
          <button onClick={addUser} >add another user</button>
          {userList.map(user => <UserBox username={user.username} email={user.email}/>)}
        </div>
      );
    };


    export default Register