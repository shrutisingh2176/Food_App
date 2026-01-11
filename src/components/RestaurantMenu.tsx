import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import {Card} from "../utils/types";


const RestaurantMenu = () => {

    const[resInfo, setResInfo]= useState<any>(null);
    
    const{resId}= useParams();
    
    console.log("resId:", resId);

   useEffect(() => {
            fetchMenu();
        }, []);
     const fetchMenu = async () => {
    
        const data = await fetch(
          MENU_API + resId  
        );
      const json = await data.json();
        console.log(json);
        setResInfo(json.data);
         };

            if (resInfo === null) return <Shimmer />;


           const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
         

                    const categories =
            resInfo?.cards
                ?.find((c: any) => c?.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                ?.filter(
                (c: any) =>
                    c?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                ) || [];

            const itemCards = categories.flatMap(
            (c: any) => c?.card?.card?.itemCards || []
            );
            console.log("itemCards:", itemCards);

         return  (
           <div className="menu">
                <h1>{name}</h1>               
                <h3>{cuisines.join(", ")}</h3>  
                <h3>{costForTwo}</h3> 


                    <h2>Menu</h2> 


                        <ul>
                            {itemCards?.map((item:any, index: number) => (
                            <li key={`${item.card.info.id}-${index}`}>
                                {item?.card?.info?.name} - {"Rs-"} 
                                {item?.card?.info?.price / 100 || item?.card?.info?.price / 100}   
                            </li>
                            ))}
                        </ul> 

             </div>
                 );
                 };





    
            export default RestaurantMenu;