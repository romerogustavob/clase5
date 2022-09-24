import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Item from '../Item/Item'
import darmodeContext from '../../context/darkmode'
import ItemCount from '../../components/ItemCount/ItemCount'
import Button from 'react-bootstrap/esm/Button'
import Loader from '../Loader/Loader'

const ItemDetail = ({item}) => {
  const [inicio, setInicio]=useState(0)
  const [stock, setStock]=useState(6)
  const [loading, setLoading] = useState(true)
  const [total, setTotal]=useState()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  const onAdd=({counter})=>{
    //(counter)
    setInicio(1)
    setStock(6)
   
    return()=>{
      console.log("El total actual es:" +parseInt(counter))
    }
  }

  return (
    <>
     
    <div align='center'>
      { loading ? 
        <Loader/> :
        <div>
          <h2>{item.map(i=>i.title)}</h2>     
          <img src={item.map(i=>i.images)}/>
          <h5>Precio: </h5> <h5>{item.map(i=>i.price)}</h5>
          <h5>Descripción:</h5> {item.map(i=>i.description)}
          <br></br>
            <div className='m-0 row justify-content-center'>
              <div className='col-md-2 col-auto text-center'>
                <ItemCount stock={stock} inicio={inicio} addOn={onAdd} />
              </div>
            </div>
          
          {/* <button onClick='' className='btn btn-secondary'>Terminar Compra</button> */}
            <Link to={`/cart/`}>           
              <Button variant="secondary" size="sm">Terminar compra</Button>
            </Link>       
            </div>
      }  
    </div>
    </>
  )
}

export default ItemDetail