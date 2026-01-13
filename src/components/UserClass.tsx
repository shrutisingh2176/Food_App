
import React from "react";
import { UserProps, UserState } from "../utils/types";



class UserClass extends React.Component<UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);

       this.state={
        userInfo:{
            name: "Dummy Name",
            location: "Default Location"
        }
       };
    
       

        //console.log(this.props.name + "Child Constructor");
    }

     async componentDidMount(){
       // console.log(this.props.name + "Child Component Did Mount");
        // API call
        const data = await fetch("https://api.github.com/users/shrutisingh2176");
        const json = await data.json();
        
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
     
     componentDidUpdate(){
        console.log("Component Did Update");
     }

     componentWillUnmount(){
        console.log("Component Will Unmount");
     }

    render() {
        
      
       // console.log( this.props.name + "Child Render");
         const {name, location} = this.state.userInfo;
        return (
        <div className ="user-card">

            <h2> Name: {name} </h2>
            <h3>Location: {location}</h3>
            <h4> Contact: @shruti123</h4>

        </div>  
        );
    }

    }
export default UserClass;