import { createSlice } from "@reduxjs/toolkit";

const cartInitialValue = {
    items: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialValue,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            state.totalQuantity ++;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id :newItem.id,
                    price : newItem.price ,
                    quantity : 1,
                    totalPrice : newItem.price,
                    title : newItem.title
                });
            }
            else {
                // index = state.items.findIndex(item => item.id == newItem.id);

                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;

                // if it wasnt redux:

                // const newArray = [state.items];
                // newArray[index] = {...newArray[index] 
                // , quantity : newArray[index].quantity +1 ,
                //  totalPrice : newArray[index].quantity * newArray[index].price
                // }
                // return {...state , items: newArray}
            }
        },
        removeItemFromCart(state, action) {
            // Add your logic for removing an item from the cart here
            const id = action.payload;
            const removedItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (removedItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                // const index = state.items.findIndex(item => item.id == id);
                // state.items[index] = {
                //     ...state.items[index],
                //     quantity : state.items[index].quantity-1,
                //     totalPrice : state.items[index].totalPrice - removedItem.price
                // }
                // you can also use the following line:

                removedItem.quantity --;
                removedItem.totalPrice = removedItem.totalPrice - removedItem.price;
            }
        },
    },
});

export const cartAction = cartSlice.actions;
const cartReducer =  cartSlice.reducer;
export default cartReducer 
