import React from "react";
import { useGlobalContext } from "../../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "../../component/AddToCart/CartItem";
import StripePay from "../../component/Checkout/StripeCheckout";
import Checkout from "../../component/Checkout/Checkout";
import "../../App.css";

const CartItems = () => {
  const { cart, clear, total } = useGlobalContext();
  if (cart.length < 1) {
    return (
      <div className="page-100">
        <div className="empty" style={{ textAlign: "center" }}>
          <h2
            style={{
              marginBottom: "1rem",
              marginTop: "1.5rem",
            }}
          >
            Your cart is empty.
          </h2>
          <Link
            to="/product"
            className="link-btn"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "0.5rem" }}>Cart</h1>

      <div className="section section-center">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className="link-container">
          <Link to="/product" className="link-btn">
            Continue Shopping
          </Link>
          <button type="button" className="link-btn clear-btn" onClick={clear}>
            Clear Cart
          </button>
        </div>
        <div className="cart-total-checkout">
          <article>
            <h3>
              Order Total : <span>${total}</span>
            </h3>
          </article>
          
          <Checkout total={total} />
        </div>
      </div>
    </>
  );
};

export default CartItems;
