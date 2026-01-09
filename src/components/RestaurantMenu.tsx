import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const[resInfo, setResInfo]= useState<any>(null);


   useEffect(() => {
            fetchMenu();
        }, []);

    const fetchMenu = async () => {
    
        const data = await fetch(
           "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7408388&lng=77.1125599&restaurantId=1304142&catalog_qa=undefined&submitAction=ENTER"
        );

     const json = await data.json();
        console.log(json);
        setResInfo(json);
         };

            if (resInfo === null) return <Shimmer />;


        const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info[0];  // change this according to data structure
         

         const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; // change this according to data structure  

        return  (
           
           
           <div className="menu">
            <h1>{name}</h1>               // change this according to data structure
            <h3>{cuisines.join(", ")}</h3>  
            <h3>{costForTwoMessage}</h3>   // change this according to data structure
            <h2>Menu</h2>
            <ul>
               {itemCards.map((item: any) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs"} // change this according to data structure
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}   // change this according to data structure
                </li>
               ))}
            </ul>
            </div>
        );
    };

    
            export default RestaurantMenu;