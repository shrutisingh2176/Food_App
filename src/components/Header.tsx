import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, use} from "react";


const Header =() => {
    let btnName = "Login";

    const[btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array => useEffect called after every render
    // if dependency array is empty = [] => useEffect called only once after initial render(only once)
    // if dependency array has variable [btnNameReact] => useEffect called whenever btnNameReact is updated
    useEffect(() => {
        console.log("useEffect called")
    },[btnNameReact]);

    return(
        <div className ="header">
            <div className="logo-container">
                <img className = "logo" src={LOGO_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li> About Us</li>
                    <li> Contact Us</li>
                    <li> Cart </li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); }}>
                            {btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;