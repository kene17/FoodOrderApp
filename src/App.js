import Header from "./components/Layout/Header";
import {Fragment, useState} from "react"
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"
import CartProvider from "./store/CartProvider";

//the Cart is rendered in this file, so this is where you should manage the visibilty of cart 
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler =()=>{
    setCartIsShown(true);
  };
  const hideCartHandler =()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
    {/* if (cardIsShown) {
    return <Cart />;
  }
  return;
} */}
    {cartIsShown && <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler} />
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
