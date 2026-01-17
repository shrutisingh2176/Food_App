 import  {useSelector} from "react-redux";
 import  ItemList  from "./MenuItemList";
 import { clearCart } from "../utils/cartSlice";
 import { useDispatch} from "react-redux";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch  = useDispatch();

    const handleClearCart = () =>{
        dispatch( clearCart())
    }


    return( <div className="text-center m-6 p-6 ">
       <h1 className="text-2xl font-bold">Cart Items</h1> 
       <div className="w-6/12 m-auto background">
       <button className ="p-2 m-2 bg-orange-600 text-amber-100 rounded-lg" onClick={handleClearCart}>
        Clear Cart
        </button>
        {cartItems.length ===0 && <h1>Cart is empty. Add Items to the cart! </h1>}
        <ItemList items={cartItems}/>

       </div>
    </div>)
}
 
export default Cart;