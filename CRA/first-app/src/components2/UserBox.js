
const UserBox = ({username, email}) => {
    return(
        <div style={{border: '2px solid yellow'}}>
            <span>{username}</span>
            <span>{email}</span>
        </div>
    )
}

export default UserBox