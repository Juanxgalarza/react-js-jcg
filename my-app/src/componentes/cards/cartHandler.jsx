import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CartHandler() {
  const URL = `https://61fad67687801d0017a2c2d0.mockapi.io/products/${id}`;

  const [loading, setLoading] = useState(false);
  const [products, setPosts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const loadPost = async () => {
      //mostrar loading
      setLoading(true);
      //esperar hasta tener todos los datos
      const response = await axios.get(URL);
      setPosts(response.data);
      //sacar el loading
      setLoading(false);
    };
    loadPost();
  }, []);

  const { cartItems, onAdd, onRemove } = products;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">

      <h2>Cart Items</h2>
      <div>

        {cartItems.length === 0 && <div>Carrito Vacio</div>}
        {cartItems.map((item) => (
          <div id={products.id} key={products.id} className="row">
            <div className="col-2">{products.titulo}</div>
            <div className="col-2">
       
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
          

            <div className="col-2 text-right">
              {products.stock} x ${products.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Precio</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tarifa</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Envio</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
