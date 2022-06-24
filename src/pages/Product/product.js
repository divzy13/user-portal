import React from "react";
import { useProductsContext } from "../../context/product_context";
import "../../App.css";
import data from "../../data";

const Product = () => {
    //const { products } = useProductsContext();
    const products = data;
    return (
        <>
            <h1> Welcome to the product Page</h1>
            <div className="cocktails-center">
                {products.map((product) => {
                    const { id, image, name, price } = product;
                    return (
                        <article key={id} className="cocktail">
                            <div className="img-container">
                                <img src={image} alt={name} />
                            </div>
                            <div className="cocktail-footer">
                                <div className="product">
                                    <h4>{name}</h4>
                                    <h4 className="price">${price}</h4>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default Product;