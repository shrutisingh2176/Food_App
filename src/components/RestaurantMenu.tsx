import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {Card} from "../utils/types";
import MenuCategory from "./MenuCategory";



const RestaurantMenu = () => {
    console.log("RestaurantMenu component rendered");

        const{resId}= useParams <{resId:string}> ();

        const [showIndex, setShowIndex] = useState<number | null>(null); // State to track which category to show , for controlled accordion
    
    

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


                    {categories.map((category: any,index:number) => 
                    // Controlled Component approach

                    // < MenuCategory key={category.card.card.title} 
                    //       data={category?.card?.card}
                    //       showItems={index === showIndex ? true : false}
                    //       setShowIndex={ () => setShowIndex(index)}
                    //  />
                                <MenuCategory
                                key={category.card.card.title}
                                data={category?.card?.card}
                                index={index}
                                showItems={showIndex === index}
                                setShowIndex={setShowIndex}
                                />
                                )}
                     
                     </div>
                 );
                 };





    
            export default RestaurantMenu;