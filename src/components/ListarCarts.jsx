import React from "react";
import { useCartContext } from "../context/CartContext";

export const ListarCarts = () => {
  const { carts, removeItem, actualizarEstado, clear } = useCartContext();

  return (
    <div>

      {carts.length ? (
        carts.map((cart) => (
          <article key={cart.id}>
            <h3>titulo: {cart.title}</h3>
            <h3>descripcion: {cart.description}</h3> 
            <h3>total: {cart.quantity}</h3>

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