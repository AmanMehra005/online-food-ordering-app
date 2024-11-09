import React from "react";
const User = ({name , location,email}) => {
    return(<div className="user-card">
        <h1>Name : {name} </h1>
        <h3>location: {location}</h3>
        <h3>Email: {email}</h3>
    </div>
)};

export default User;