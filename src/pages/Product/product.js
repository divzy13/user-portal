import React from "react";
import { useProductsContext } from "../../context/products_context";
import "../../App.css";
import AddToCart from "../../component/AddToCart/AddToCart";
import { Link } from "react-router-dom";

const Product = () => {
    const { products } = useProductsContext();
    return (
        <>
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
                                <AddToCart product={products} />
                                <Link
                                    to={`/products/${id}`}
                                    className="add-cart"
                                    style={{
                                        color: "#17252A",
                                        background: "#fff",
                                        border: "2px solid #17252A",
                                    }}>
                                    View
                                </Link>
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
};

export default Product;