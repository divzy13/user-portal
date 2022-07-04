import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePay = React.memo(function StripePay({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;

  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful! Your order is placed.");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Portal"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/iem.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      bitcoin={true}
      stripeKey={publishableKey}
    />
  );
});

export default StripePay;
