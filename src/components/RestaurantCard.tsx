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
        <div className="res-card m-4 p-4 w-52 bg-fuchsia-100 border border-fuchsia-200 rounded-xl shadow-gray-400  hover:shadow-md transition  h-100  hover:-translate-y-1.5   " >
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
  // Higher Order Component 
  // input - RestaurantCard => RestaurantCardPromoted 

  export const withOffer = (RestaurantCard: any) => {
    return (props:RestaurantCardProps)=>{
        const {resData} = props;
        const offer = resData?.info?.aggregatedDiscountInfoV3;
        return (
            <div className="relative">
                <label className="absolute z-10 top-4 left-2 bg-red-900 text-amber-50 rounded-xl px-3 py-1 font-semibold shadow">
                    {offer.header} {offer.header ? ` - ${offer.subHeader} ` :""}
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

 export default RestaurantCard;