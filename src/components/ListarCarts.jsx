import React from "react";
import { useCartContext } from "../context/CartContext";

export const ListarCarts = () => {
  const { carts,quantity, removeItem, actualizarEstado, clear } = useCartContext();

  return (
    <div>

      {carts.length ? (
        carts.map((cart) => (
          <article key={cart.id}>
            <h3>Titulo:</h3>
            <h4>{cart.title}</h4> 
            <h3>Precio:</h3>
            <h4>{cart.price} </h4>
            <h3>Total:</h3>
            <h4>{cart.quantity}</h4>
            <button className="button" onClick={() => removeItem(cart)}>
              Remover cart
            </button>
          </article>
        ))
      ) : (
        <h3 style={{ margin: "5rem" }}>No hay carts...</h3>
      )}
      {carts.length > 0 && (
        <button className="button" onClick={clear}>
          Vaciar lista de carts
        </button>
      )}
    </div>
  );
};