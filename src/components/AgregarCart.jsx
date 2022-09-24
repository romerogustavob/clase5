import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";

export const SubirCarts = ({titulo, descripcion, precio, total }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const { addItem } = useCartContext();

  // Funcion para el formulario
  const onClick = ({e}) => {
    e.preventDefault();

    addItem({ titulo, descripcion, precio, total });

    setTitle(titulo);
    setDescription(descripcion);
    setPrice(precio);
    setQuantity(total);
  };

  return (
    <>
      <h1>Lista de Carts</h1>

        {/* <input
          className="input"
          type="text"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="TCart..."
          autoComplete="off"
          required
        /> */}
        <input className="button" type="submit" onClick={onClick} value="Agregar cart" />
   
    </>
  );
};