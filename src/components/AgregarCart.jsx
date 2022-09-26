import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";

export const AgregarCart = ({titulo, descripcion, precio, total }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const { addItem } = useCartContext();

  useEffect(() => {
    setTitle(titulo);
    setDescription(descripcion);
    setPrice(precio);
    setQuantity(total);
  }, [])
  

  // Funcion para el formulario
  const onClick = () => {
    // e.preventDefault();
    setQuantity(total);

    setTimeout(() => {
      addItem({ title, description, price, quantity});
    }, 1000);
    
  };

  return (
    <>
      <div className="p-3">
        <input className="button" type="submit" onClick={onClick} value="Agregar cart" />
      </div>
       
    </>
  );
};