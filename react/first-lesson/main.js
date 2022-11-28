// const Element = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )
// const Element2 = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )
// const Element3 = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )
// const Element4 = React.createElement(
//     'div', {onClick: () => console.log('clicked')}, 'Click Me!'
// )

// // ReactDOM.render(Element, document.getElementById('app'))
// // ReactDOM.render(Element2, document.getElementById('app'))
// // ReactDOM.render(Element3, document.getElementById('app'))
// // ReactDOM.render(Element4, document.getElementById('app'))

// const TimeOfDay = () => {
//     let greeting = 'hello dear user, good'
//     let timeOfDayForGreeting;
//     const hour = 4
//     if(hour < 6){
//         timeOfDayForGreeting = 'before morning'
//     } else if(hour >= 6 && hour <= 12){
//         timeOfDayForGreeting = 'morning'
//     } else if (hour > 12 && hour <= 23){
//         timeOfDayForGreeting = 'evening'
//     }

//     return(
//         <div className="check">
//             {greeting}-{timeOfDayForGreeting}
//         </div>
//     )
// }

// const Buttons = () => {

//     let isAdmin = false
//     return (
//         <div>
//             <button onClick={() => console.log('clicked')}>please click me!!!!</button>
//             {isAdmin && <button onClick={() => alert('i am clicked')}>please click me 2</button>}
//             {isAdmin ? <p>welcome mr. admin</p> : <p>welcome simple user</p>}
//         </div>
//     )
// }

// const Comp = () =>{
// return (
//     <div style={{display:'flex', margin: '20px'}}>
//         <TimeOfDay/>
//         <div style={{margin:'0px 20px'}}>
//             <Buttons/>
//         </div>
//     </div>
// )

// }
const UserBox = ({username, email}) => {
    return(
        <div style={{border: '2px solid yellow'}}>
            <span>{username}</span>
            <span>{email}</span>
        </div>
    )
}
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

ReactDOM.render(<Register />, document.getElementById("app"));
