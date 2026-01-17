import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext} from "react";
import{ Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import  UserContext from "../utils/UserContext"
import { useSelector} from "react-redux";


const Header =() => {
    let btnName = "Login";

    const[btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array => useEffect called after every render
    // if dependency array is empty = [] => useEffect called only once after initial render(only once)
    // if dependency array has variable [btnNameReact] => useEffect called whenever btnNameReact is updated
    useEffect(() => {
      //  console.log("useEffect called")
    },[btnNameReact]);

    const onlineStatus = useOnlineStatus();

    const {loggedInUser}= useContext(UserContext);
    //console.log(loggedInUser);

    //Subscribing to the store using a Selector 
    const cartItems = useSelector ((store) => store.cart.items)
    console.log(cartItems);


    return(
        <div className ="flex items-center bg-fuchsia-200 shadow-lg h-44 w-full  ">
            <div className="flex items-center shrink-0">
                <img className = "w-auto h-32 rounded-xl object-contain  " src={LOGO_URL}/>
            </div>
            <div className = " flex items-center justify-between flex-1">

                <ul className = "flex items-center space-x-6 justify-between ml-auto whitespace-nowrap  text-fuchsia-900 font-medium text-xl">
                    <li>
                       Online Status:  {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="hover:text-pink-600 cursor-pointer  transition">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="hover:text-pink-600 cursor-pointer transition"> 
                        <Link to="/about"> About Us</Link>
                    </li>

                    <li className="hover:text-pink-600 cursor-pointer transition"> 
                     <Link to="/contact"> Contact Us</Link>
                    </li>

                    <li className="hover:text-pink-600 cursor-pointer transition"> 
                     <Link to="/grocery"> Grocery</Link>
                    </li>

                    <li className=" text-2xl"> 
                       <Link to ="/cart" >🛒({cartItems.length})</Link>
                     </li>

                    <button className="login-btn border border-b-fuchsia-800 px-4 py-1 bg-white rounded-lg shadow text" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); }}>
                            {btnNameReact}</button>
                         <li className="px-4 font-bold ">{loggedInUser} </li>
                       

                </ul>
            </div>
        </div>
    )
}
export default Header;
