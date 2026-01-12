import {useState} from "react";

// functional component to display user information

interface UserProps {
  name: string;
  location?: string;
}



const User = ({ name, location }: UserProps) => {
    const [count] = useState(0);
    return (
        <div className ="user-card">
            <h1>Count: {count}</h1>
            <h2> Name: {name} </h2>
            <h3>Location: {location}</h3>
            <h4> Contact: @shruti123</h4>
        </div>) 
    }
    


export default User;