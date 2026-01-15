import { CDN_URL } from "../utils/constants";
import { Restaurant} from "../utils/types";


type RestaurantCardProps = {
    
    resData: Restaurant;

        };



const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props: RestaurantCardProps) =>{
   const {resData} = props;

     const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} =resData?.info;

    return(
        <div className="res-card m-4 p-4 w-52 bg-green-100 hover:bg-gray-300  h-100" >
            <img 
            className="res-logo rounded-lg h-36 w-48"
            alt="res-logo"
            src={ CDN_URL
            + cloudinaryImageId}/>
            <h3 className="font-bold py-2 ">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
 }

 export default RestaurantCard;