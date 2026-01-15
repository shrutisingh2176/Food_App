import { CDN_URL } from "../utils/constants";
import { ItemListProps } from "../utils/types";

const MenuItemList = ({ items }: ItemListProps) => {  
    //console.log("Menu Item List Data:", items);  
    return (
        <div >
            {items.map((item:any) =>(
                <div
                 key={item?.card?.info?.id}
                 className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between">
                    
                   
                    <div className="w-9/12">
                    <div className="py-2 ">
                        <span className="font-serif">{item?.card?.info?.name}</span>
                        <span> - ₹{item?.card?.info?.price/100}</span>
                    </div>
                    <p className="text-xs w-10/12">{item?.card?.info?.description}</p>
                </div> 
                <div  className="w-3/12  p-4 relative ">
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 ">
                      <button className="p-1 bg-white shadow-lg mx-16 rounded-lg text-green-700 px-4 py-1s font-semibold whitespace-nowrap "> ADD +</button>
                    </div>
                      <img  src={CDN_URL + item?.card?.info?.imageId}/>
                </div>
                </div>
                ))} 
        </div>
    );
};

export default MenuItemList;