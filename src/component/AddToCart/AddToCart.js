import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./AddToCart.css";
import { useGlobalContext } from "../../context/cart_context"
import AmountButtons from "../AmountButtons/AmountButtons";

const AddToCart = React.memo(function AddToCart({ product }) {
    const { addToCart } = useGlobalContext();
    const { id, stock } = product;

    const [amount, setAmount] = useState(1);

    const increment = () => {
        setAmount((old) => {
            let temp = old + 1;
            if (temp > stock) {
                temp = stock;
            }
            return temp;
        });
    };

    const decrement = () => {
        setAmount((old) => {
            let temp = old - 1;
            if (temp < 1) {
                temp = 1;
            }
            return temp;
        });
    };

    return (
        <div className="btn-container">
            <AmountButtons amount={amount} inc={increment} dec={decrement} />
            <Link onClick={() => addToCart(id, amount, product)}>
                Add To Cart
        </Link>
        </div>
    );
})

export default AddToCart;