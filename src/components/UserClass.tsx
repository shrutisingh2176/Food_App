
import React from "react";

interface UserProps {
  name: string;
  location?: string;
  
}
interface UserState {
  count: number;
}

class UserClass extends React.Component<UserProps, UserState> {
    constructor(props: any) {
        super(props);
        this.state = {
            count:0
        };
    }

    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        return (
        <div className ="user-card">
            <h1>Count: {count}</h1>
            <h2> Name: {name} </h2>
            <h3>Location: {location}</h3>
            <h4> Contact: @shruti123</h4>
        </div>  
        );
    }

    }
export default UserClass;