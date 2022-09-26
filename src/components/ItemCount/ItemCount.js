import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { AgregarCart } from '../AgregarCart';

const ItemCount = ( {item, stock, inicio}) => {
    const [counter, setCounter]=useState(parseInt(inicio));
    useEffect(() => {  
        console.log('counter en itemcount:'+counter)
        setCounter(counter)
    }, [counter]);
      
    
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
            <AgregarCart titulo={item.map(i=>i.title)} descripcion={item.map(i=>i.description)} precio={item.map(i=>i.price)} total={counter}/> 
   
            </td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default ItemCount