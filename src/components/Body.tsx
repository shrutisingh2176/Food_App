import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {use, useState} from "react";

// Local State Variable - Super powerul variable
const Body = () =>{
    let [listOfRestaurants , setListOfRestaurants]= useState(resList);
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