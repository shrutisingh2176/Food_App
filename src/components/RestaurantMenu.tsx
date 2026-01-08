import {useEffect} from "react";



const RestaurantMenu = () => {

   useEffect(() => {
            fetchMenu();
        }, []);

    const fetchMenu = async () => {
    
        const data = await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6426028&lng=77.21921669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

     const json = await data.json();
        console.log(json);
         };
     
        return (
            <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Paneer Butter Masala</li>
                <li>Dal Makhani</li>
                <li>Jeera Rice</li>
                <li>Naan</li>
                <li>Gulab Jamun</li>
            </ul>
            </div>
        );}
        export default RestaurantMenu;