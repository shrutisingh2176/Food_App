import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect} from "react";

// Local State Variable - Super powerul variable
const Body = () =>{
    let [listOfRestaurants , setListOfRestaurants]= useState(resList);

    useEffect(() =>{fetchData()},
    []);

        const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7408388&lng=77.1125599&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    };
      return(
        <div className="Body" >
            <div className="filter">
            <button className= "filter-btn"
             onClick={() => 
            {   
                const filteredList=listOfRestaurants.filter(
                (res) => res.info.avgRating >4);
                setListOfRestaurants(filteredList);
               

             }}>Top Rated Restaurants</button>

            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} resName={""} cuisine={""} avgRating={0} costForTwo={""} deliveryTime={0} /> ))}
            </div>
        </div>
    )
    }
export default Body;