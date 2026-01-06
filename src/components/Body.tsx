import RestaurantCard from "./RestaurantCard";
//simport resList from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Restaurant} from "../utils/types";


// Local State Variable - Super powerul variable
const Body = () =>{
    let [listOfRestaurants , setListOfRestaurants]= useState<Restaurant[]>([]);
    let [searchText, setSearchText]= useState("");
    let [filteredRestaurants, setFilteredRestaurants]= useState<Restaurant[]>([]);

    // Whenever the state variable update - react re-renders the component




    useEffect(() =>{fetchData()},
    []);

        const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7408388&lng=77.1125599&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    // Conditional Rendering 
    //if (listOfRestaurants.length === 0) {
       // return <Shimmer />; }
     
     
       return( listOfRestaurants.length ===0)? <Shimmer /> : ( 
        <div className="Body" >
            <div className="filter">
                <div className="search">
                    <input type="text"
                     className="search-box"
                      value={searchText} 
                      onChange= {(e) => {
                        setSearchText(e.target.value);
                      }}/>
                    <button className="search-btn" 
                    onClick={() =>{
                        //Filter the restaurant cards and update the UI
                       const  filteredRestaurants=listOfRestaurants.filter((res) =>
                         res.info.name.toLowerCase().includes(searchText.toLowerCase())
                         ); 

                    setFilteredRestaurants(filteredRestaurants);



                    }}>Search</button>
                </div>
            <button className= "filter-btn"
             onClick={() => 
            {   
                const filteredList=listOfRestaurants.filter(
                (res) => res.info.avgRating >4);
                setFilteredRestaurants(filteredList);
               

             }}>Top Rated Restaurants</button>

            </div>
            <div className="res-container">
                {filteredRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}  /> ))}
            </div>
        </div>
    )
    }
    







export default Body;