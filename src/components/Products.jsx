//import React from 'react'

import {  useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import {getProducts} from '../store/productSlice'

const Products = () => {
  const dispatch = useDispatch();
  //const [products, getProducts] = useState([]);

  const productsData=useSelector(state=>state.products)
  const stringifiedProductsData=JSON.stringify(productsData)
console.log(`from products component ${productsData.data}`)
  useEffect(() => {
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
  });

  const addToCart = (product) => {
    // dispatch an add action

    dispatch(add(product));
  };

  return (
    <>
      <h1>Products Dashboard</h1>
      <div className="product-card-container">
        {stringifiedProductsData.data.map((product) => {
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
              <button className="cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
