import MenuItemList from "./MenuItemList";
 import { MenuCategoryProps } from "../utils/types";
import { useState } from "react";


const MenuCategory = ({ data}: MenuCategoryProps) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };
    
    return (
        <div>
        
        <div className=" w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer "  onClick={handleClick} >
            <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span> 
            <span>🔽</span>
            
        </div>
        {showItems && <MenuItemList items={data?.itemCards || []} />}
        </div>
        </div>

    );
};

export default MenuCategory;