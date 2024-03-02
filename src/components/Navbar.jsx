//import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const Navbar = () => {
  const cartProducts=useSelector(state=>state.cart);

  return (
    <div className="navbar-container">
        <h4>Redux Toolkit</h4>
        <ul className="nav-items-container">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">My Bag {cartProducts.length}</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar