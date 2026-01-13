 import User from "./User";
 import UserClass from "./UserClass";
 import { Component } from "react";
 //import React from "react";

    class About extends Component { // On place of Component we can also => React.Component
        constructor(props: any) {
            super(props);
           // console.log("Parent Constructor");
        }

        componentDidMount(): void {
          //  console.log("Parent Component Did Mount");
        }

        render() { 
           // console.log("Parent Render");
            return(
                <div>
                    <h1>About Us</h1>
                    <h2> This is Namaste React Web Series </h2>
                    <UserClass name={"First"} location={"Delhi (class)"}/>
                     
                </div>
            );
        };
    }

 
    export default About;