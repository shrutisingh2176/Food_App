import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = () => {

    const[resInfo, setResInfo]= useState<any>(null);
    
    //const{resId}= useParams();

   useEffect(() => {
            fetchMenu();
        }, []);


    // const fetchMenu = async () => {
    
    //     const data = await fetch(
    //       MENU_API + resId  
    //     );



    const fetchMenu = async () => {
         const data = await fetch(
          " https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=24148 " 
        );



     const json = await data.json();
        console.log(json);
        setResInfo(json);
         };

            if (resInfo === null) return <Shimmer />;


       // const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info[0];  // change this according to data structure
         

        // const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; // change this according to data structure  

    //     return  (
           
           
    //        <div className="menu">
    //        <h1>{name}</h1>               // change this according to data structure
    //         <h3>{cuisines.join(", ")}</h3>  
    //         <h3>{costForTwoMessage}</h3>   // change this according to data structure
    //         <h2>Menu</h2>
    //         <ul>
    //            {itemCards.map((item: any) => (
    //             <li key={item.card.info.id}>
    //                 {item.card.info.name} - {"Rs"} // change this according to data structure
    //                 {item.card.info.price / 100 || item.card.info.defaultPrice / 100}   // change this according to data structure
    //             </li>
    //            ))}
    //         </ul>
    //         </div>
    //     );
    // };



    return (
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h3>Cuisines</h3>
            <h3>Cost for two</h3>
            <h2>Menu</h2>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>        
            </ul>
            </div>
    );
}
    
            export default RestaurantMenu;