import React from "react";
class Userclass extends React.Component{
constructor(props){
    super(props);

    this.state = {
        count :0,
        count2 :1,
    };
    console.log("child constructor called");
}

componentDidMount(){
    console.log("child component did mount");
}

render(){
    console.log("child render")
    const {count} = this.state;
    const {name , location , email} = this.props; 
    return(<div className="user-card">
        <h1>Count : {count}</h1>
        <button onClick={() => {
            this.setState({
                count : this.state.count+1,
            });
        }}>
            count Increase
        </button>
        <h1>Name :{name} </h1>
        <h3>location: {location}</h3>
        <h3>Email: {email}</h3>
    </div>
)};
}
export default Userclass;