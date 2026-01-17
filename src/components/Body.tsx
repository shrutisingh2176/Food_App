import RestaurantCard from "./RestaurantCard";
//simport resList from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Restaurant} from "../utils/types";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {Provider} from "react-redux"


// Local State Variable - Super powerul variable
const Body = () =>{
    let [listOfRestaurants , setListOfRestaurants]= useState<Restaurant[]>([]);
    let [searchText, setSearchText]= useState("");
    let [filteredRestaurants, setFilteredRestaurants]= useState<Restaurant[]>([]);

    // Whenever the state variable update - react re-renders the component

   // console.log("Body Rendered", listOfRestaurants);


    useEffect(() =>{fetchData()},
    []);

        const fetchData = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>
            🔴 You are offline! Please check your internet connection.
            </h1>
        );
    }

    // const {loggedInUser, setUserName} = useContext(UserContext);

    // Conditional Rendering 
    //if (listOfRestaurants.length === 0) {
    // return <Shimmer />; }
     
     
       return( listOfRestaurants.length ===0)? <Shimmer /> : ( 
        <div className="Body" >
            <div className=" flex justify-center">
                <div className="search m-4 p-4">
                    <input type="text"
                     className="search-box border border-solid border-black  p-2 rounded-2xl  focus:outline-none focus:ring-2 focus:ring-pink-700"
                     placeholder="  Search Restaurants..."
                      value={searchText} 
                      onChange= {(e) => {
                        setSearchText(e.target.value);
                      }}/>

                    <button className="search-btn px-5 py-2 border border-pink-300 bg-fuchsia-300  m-4 rounded-2xl hover:bg-pink-700 hover:text-amber-50  hover:shadow-pink-400" 
                        onClick={() =>{
                            //Filter the restaurant cards and update the UI
                        const  filteredRestaurants=listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            ); 

                       setFilteredRestaurants(filteredRestaurants);
                   }}>Search</button>

                </div>
                <div>
                    <button className= "px-4 py-2 border border-pink-300  bg-fuchsia-300  m-4 rounded-2xl flex items-center justify-center mt-12 hover:bg-pink-700  hover:text-amber-50  hover:shadow-pink-400"
                            onClick={() => 
                            {   
                                const filteredList=listOfRestaurants.filter(
                                (res) => res.info.avgRating >4.4);
                                setFilteredRestaurants(filteredList);
                            

                            }}>Top Rated Restaurants
                    </button>
                </div>
                {/* <div>
                    <label>UserName</label>
                    <input className="border border-black p-2 "
                    value={LoggedInUser}
                     onChange ={(e) => setUserName(e.target.value)}/>
                </div> */}
            </div>
            <div className="res-container flex flex-wrap justify-center ">
                {filteredRestaurants.map(restaurant => (
                  <Link 
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}> 
                   <RestaurantCard  resData={restaurant}  /> </Link>))}
            </div>
        </div>
    )//flex flex-wrap justify-center
    }
    







export default Body;