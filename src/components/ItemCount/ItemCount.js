import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useCartContext } from '../../context/CartContext';
import { AgregarCart } from '../AgregarCart';

const ItemCount = ( {item, stock, inicio}) => {
    const [counter, setCounter]=useState(parseInt(inicio));
    const [id, setId]=useState(()=>{return item.map(i=>i.id)})
    const [title, setTitle] = useState(()=>{return item.map(i=>i.title)});
    const [description, setDescription] = useState(()=>{return item.map(i=>i.description)});
    const [price, setPrice] = useState(()=>{return item.map(i=>i.price)});

    useEffect(() => {
      setId(()=>{return item.map(i=>i.id)})
      setTitle(()=>{return item.map(i=>i.title)});
      setDescription(()=>{return item.map(i=>i.description)});
      setPrice(()=>{return item.map(i=>i.price)});
  
        console.log('counter en itemcount:'+counter+"title:"+title)
        setCounter(counter)
    }, [counter]);

      
    const {addItem}=useCartContext()
    
    const handleClick=()=>{
      
      if(parseInt(stock)===counter){
        alert('stock completo') 
       }else{
        setCounter(counter + 1);
       }
    }
    
    const handleClickMinus=()=>{

      if(0===counter){
        alert('Agregue un producto')
       } else{
        setCounter(counter - 1);
       }

    }

    const onClick = (evt) => {
      evt.preventDefault();
  
      setTimeout(() => {
        //return addItem({ item, counter});
        addItem({ id, title, description, price, counter});
      }, 1000);
      
    };

  return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>         
          <th colSpan={3}>Agregar al carrito</th>
        </tr>
      </thead>
      <tbody>
        <tr>    
            <td>
                <Button variant="secondary" size="sm" active onClick={handleClickMinus}>-</Button>
            </td>
            <td>
                <strong>{counter}</strong>
            </td>
            <td>
                <Button variant="secondary" size="sm" active onClick={handleClick}>+</Button>
            </td>
        </tr>
        <tr text-align="center">   
            <td text-align="center" colSpan={3}>                    
              <div className="p-3">
                <input className="button" type="submit" onClick={onClick} value="Agregar producto" />
              </div>
            </td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default ItemCount