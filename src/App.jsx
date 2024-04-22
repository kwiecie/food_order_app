import { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./store/CartProvider";
import Checkout from "./Cart/Checkout";
import UserProgressContext, { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  
  return (
    <CartProvider>
      <UserProgressContextProvider>
        <Header />
        <Cart />
        <Checkout />
        <main>
          <Meals />
        </main>
      </UserProgressContextProvider>
    </CartProvider>
  );
}

export default App;
