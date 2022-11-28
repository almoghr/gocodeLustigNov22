import UserBox from './UserBox'
import './Register.css'

const Register = () => {
    const user = {
        username: "almog",
        password: "blabla",
        email: "almoghr36@gmail.com",
      };
    
      const userList = [
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
      const isEditMode = false;
    
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
    
          <button>{isEditMode ? "update" : "submit"}</button>
          {userList.map(user => <UserBox username={user.username} email={user.email}/>)}
        </div>
      );
    };


    export default Register