import React from 'react';

//create context takes a default context often it's an object
const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem:(item) =>{},
    removeItem:(id) =>{}

})
export default CartContext;