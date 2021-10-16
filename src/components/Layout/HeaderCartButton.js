import CartIcon from "../Cart/CartIcon"
import {useContext} from 'react';
import CartContext from "../../store/cart-context"
import classes from "./HeaderCartButton.module.css"
const HeaderCartButton = (props) =>{
    //now by using useContext the HeaderCartButtoon would be re-evaluated whenever the context changes
    //and it changes when it's updated in the CartProvider.js
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;