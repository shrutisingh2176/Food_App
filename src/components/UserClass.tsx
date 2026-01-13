
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

        // this.state = {
        //     count:0
        // };

        //console.log(this.props.name + "Child Constructor");
    }

     componentDidMount(){
       // console.log(this.props.name + "Child Component Did Mount");
        // API call

    }

    render() {
        const { name, location } = this.props;
       // const { count } = this.state;
       
       // console.log( this.props.name + "Child Render");

        return (
        <div className ="user-card">
            {/* <h1>Count: {count}</h1> */}
            {/* <button onClick ={() => {
               
               this.setState({count: this.state.count +1
                   
                 });
            }}>Count Increase</button> */}

            <h2> Name: {name} </h2>
            <h3>Location: {location}</h3>
            <h4> Contact: @shruti123</h4>

        </div>  
        );
    }

    }
export default UserClass;