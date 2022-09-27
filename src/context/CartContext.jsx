import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import uuid from "react-uuid";

const CartContext = createContext([]);

export const useCartContext=()=>useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);

  
    const isInCart = (cart) => {
      return carts.some((buscada) => buscada.id === cart.id);
    };
  
    const addItem = (cart) => {
      if (isInCart(cart)) {
        return Swal.fire("Ya existe en la lista");
      }
  
      const key = uuid();
      const nuevaCart = { ...cart, key};
      setCarts([...carts, nuevaCart]);
      Swal.fire("Producto agregado");
    };
  
    const removeItem = (cart) => {
      const removeItem = carts.filter((buscada) => buscada.id !== cart.id);
      return setCarts(removeItem);
    };
  
    const clear = () => {
      setCarts([]);
    };
  
    return (
      <CartContext.Provider
        value={{
          carts,
          isInCart,
          addItem,
          removeItem,
          clear,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
