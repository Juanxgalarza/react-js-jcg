import './itemCount.css';
import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Item from './Item';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const URL = 'https://61fad67687801d0017a2c2d0.mockapi.io/products'
  
function ItemList() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
   

    useEffect(() => {
        const loadData = async () => {
  
           
            setLoading(true);
  
            
            const response = await axios.get(
            URL);
  
           
            setProducts(response.data);
  
         
            setLoading(false);
        }
  
        loadData();
        
    }, []);

    return (
        <>
       <ul>

        {loading ?<h1>Cargando...</h1> : products.map((e) => {
          return (
            <>
              <Item key={e.id} id={e.id} titulo={e.titulo} paragraph={e.paragraph} stock={e.stock} src={e.src} />

              <Button>

                <Link to={`/products/${e.id}`}>Ver mas detalles...</Link>
              </Button>
            </>

          );
        })}
      </ul>
     </>
    )
    ;
}

export default ItemList;