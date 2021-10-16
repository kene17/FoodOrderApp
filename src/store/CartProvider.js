import CartContext from "./cart-context";
//we are using useReducer because we want to check if the item is already part of the cart. if i was just adding the item, i'd use useState
import { useReducer } from 'react';
//state is simply the last state snapshot, action is dispatched by you.
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer =(state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.forwardedItem)
        const updatedTotalAmount = state.totalAmount + action.forwardedItem.price * action.forwardedItem.amount;
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
};
const CartProvider = props =>{
    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    //when this function is called we get the item that should be added to the cart. We want to check if that item is already part of the cart and if that's the case we should update the existing item, if it's not the case we add a new item. 
    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type:'ADD',  forwardedItem: item})
    };
    const removeItemToCartHandler = id =>{};
    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler,
    }
    return (
        <>
            <CartContext.Provider value={cartContext}>
            {props.children}

            </CartContext.Provider>
        </>
    ); 
};

export default CartProvider;