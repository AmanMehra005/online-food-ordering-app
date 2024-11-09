import React from "react";
import User from "./User";
import Userclass from "./Userclass";


class Abouts extends React.Component{
constructor(props){
    super(props);
console.log("parent constructor");
}

componentDidMount(){
    console.log("parent component did mount");
}

render(){
    console.log("parent render");
    return(
        <div>
            <h1>Abouts Us</h1>
    
            {/* <User name={"Aman Mehra (function)"} location={"Dehradun"} email={"amanmehra9643@gmail.com"}/> */}
            <Userclass name={"Rohit Mehra(class)"} location={"Ranikhet"} email={"rohitmehra8506@gmail.com"}/>
        </div>
    )
}

}

export default Abouts;