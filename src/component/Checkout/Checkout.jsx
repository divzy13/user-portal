import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart-selectors";
import "./Checkout.scss";

import styled from "styled-components";
import AlgoModal from "../Algo-Payment-Modal/AlgoModal";
import Modal from "../Payment-Modal/Modal";
import StripePay from "../../component/Checkout/StripeCheckout";


const Button = styled.button`
  min-width: 300px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: var(--form-press);
  color: var(--coin);
  border : solid 1px lightblue;
  text-transform: none;
  cursor: pointer;
  font-weight: bold;

  @media screen and (min-width: 995px) and (max-width: 1200px){
    padding: 5px;
  }
 @media screen and (min-width: 800px) and (max-width: 994px) {
   font-size : 10px;
   padding : 0px;
 }
`;
const Checkout = ({ total }) => {
//dropdown menu

const [showAlgoModal, setShowAlgoModal] = useState(false);
console.log(showAlgoModal)

const openAlgoModal = () => {
  setShowAlgoModal((prev) => !prev);
};

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="checkout-page">
      <div className="payment">
      <StripePay price={total} />
        <Button onClick={openAlgoModal}> Pay with Algo</Button>
        <AlgoModal
          showAlgoModal={showAlgoModal}
          setShowAlgoModal={setShowAlgoModal}
          price={total}
        />

        <Button onClick={openModal}>Pay with Choice Coin</Button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          price={total}
        />
      </div>
    </div>
  );
};
// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal,
// });

// export default connect(mapStateToProps)(Checkout);

export default Checkout;
