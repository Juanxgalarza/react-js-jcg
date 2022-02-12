import React, { useState, useReducer, useEffect } from "react";
import { createContext, useContext } from "react";
import axios from "axios";
import { carritoReducer } from './reducer';


const URL = 'https://61fad67687801d0017a2c2d0.mockapi.io/products';

const Cart = createContext();

 export const Context =  ({ children }) => {

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

  const [state, dispatch] =  useReducer(carritoReducer, {
    loading: loading,
    products: products,
    cart: [],
  });


  return ( 
<Cart.Provider value={{state, dispatch}}> {children} </Cart.Provider> 
  );
}

export default Context;

export const CarritoEstado=()=> {
  return useContext(Cart);

};