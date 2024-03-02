//import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const productsInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (id) => {
    //dispatch a remove action

    dispatch(remove(id));
  };
  return (
    <div className="product-card-container">
      {productsInCart.map((product) => {
        const { id, title, price, category, image, rating } = product;
        return (
          <div key={id} className="product-card">
            <div className="product-details-container">
              <img src={image} className="product-img" />
              <p className="title">{title}</p>
              <p className="description">{category}</p>
              <p className="price">{price}</p>
              <p className="rating">{rating.rate}</p>
            </div>
            <button className="cart-btn" onClick={() => removeCart(product.id)}>
              Remove Item{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
