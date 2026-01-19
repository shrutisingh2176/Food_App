 import {createSlice , PayloadAction} from "@reduxjs/toolkit"
 import { CartState, CartItem } from "./types";


//  const cartSlice = createSlice ({  
//     name: 'cart',
//     initialState: {
//         items:[]
//     },

//addItem: (state,action) =>{
            // mutating the state
             //   state.items.push(action.payload);
        //},

    const initialState: CartState = {
    items: [],
    };

    const cartSlice = createSlice({
    name: "cart",
    initialState,
    
    reducers: {
        
        addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
           },

        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length=0;
        }
    }

 })

 export const {addItem,removeItem,clearCart}=cartSlice.actions;
 export default cartSlice.reducer;

 