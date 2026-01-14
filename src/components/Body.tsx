import RestaurantCard from "./RestaurantCard";
//simport resList from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Restaurant} from "../utils/types";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


// Local State Variable - Super powerul variable
const Body = () =>{
    let [listOfRestaurants , setListOfRestaurants]= useState<Restaurant[]>([]);
    let [searchText, setSearchText]= useState("");
    let [filteredRestaurants, setFilteredRestaurants]= useState<Restaurant[]>([]);

    // Whenever the state variable update - react re-renders the component




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


    // Conditional Rendering 
    //if (listOfRestaurants.length === 0) {
       // return <Shimmer />; }
     
     
       return( listOfRestaurants.length ===0)? <Shimmer /> : ( 
        <div className="Body" >
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text"
                     className="search-box border border-solid border-black p-2"
                      value={searchText} 
                      onChange= {(e) => {
                        setSearchText(e.target.value);
                      }}/>

                    <button className="search-btn px-4 py-2 bg-gray-300  m-4 rounded-md " 
                        onClick={() =>{
                            //Filter the restaurant cards and update the UI
                        const  filteredRestaurants=listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            ); 

                       setFilteredRestaurants(filteredRestaurants);
                   }}>Search</button>

                </div>
                <div>
                    <button className= "px-4 py-2 bg-gray-400  m-4 rounded-md flex items-center justify-center mt-12 hover:bg-gray-500 r"
                    onClick={() => 
                    {   
                        const filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating >4);
                        setFilteredRestaurants(filteredList);
                    

                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap justify-center">
                {filteredRestaurants.map(restaurant => (
                  <Link 
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}> 
                   <RestaurantCard  resData={restaurant}  /> </Link>))}
            </div>
        </div>
    )
    }
    







export default Body;