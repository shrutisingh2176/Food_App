import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {Card} from "../utils/types";
import MenuCategory from "./MenuCategory";


const RestaurantMenu = () => {
    console.log("RestaurantMenu component rendered");

        const{resId}= useParams <{resId:string}> ();
    
    

     if (!resId) return null;

        const restaurantId = Number(resId.trim());
       const resInfo = useRestaurantMenu(restaurantId);

     

            if (resInfo === null) return <Shimmer />;


           const { name,
             cuisines =[], 
             costForTwo,
             } = resInfo?.cards[2]?.card?.card?.info ||{};
         

        const categories =
            resInfo?.cards
                ?.find((c: Card) => c?.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                ?.filter(
                (c:any) =>
                    c?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                ) || [];

            const itemCards = categories.flatMap(
            (c: Card) => c?.card?.card?.itemCards || []
            );

            //console.log("Item Categories:", categories);
            //console.log("All Menu Item Cards:", itemCards);
           

         return  (
           <div className="text-center">
                <h1 className="font-bold my-8 text-2xl">{name}</h1>               
                <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>  
                <h3 className="font-bold text-lg"> Cost For Two: {costForTwo}</h3> 


                    {categories.map((category: any) => < MenuCategory key={category.card.card.title} data={category?.card?.card} />)}


                        {/* <ul>
                            {itemCards?.map((item:any, index: number) => (
                            <li key={`${item.card.info.id}-${index}`}>
                                {item?.card?.info?.name} - {"Rs-"} 
                                {item?.card?.info?.price / 100 || item?.card?.info?.price / 100}   
                            </li>
                            ))}
                        </ul>  */}

             </div>
                 );
                 };





    
            export default RestaurantMenu;