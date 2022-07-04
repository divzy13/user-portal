import React from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import AddToCart from "../../component/AddToCart/AddToCart";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useProductsContext();

  const temp = products.filter((product) => product.id === id);

  return (
    <div>
      {temp.map((products) => {
        const { name, price, description, stock, image } = products;
        return (
          <div className="product-center" key={products.id}>
            <img className="prod-photo" src={image} alt={name} />
            <section className="content-prod">
              <h2>{name}</h2>
              <span className="fa fa-star review"></span>
              <span className="fa fa-star review"></span>
              <span className="fa fa-star review"></span>
              <span className="fa fa-star review"></span>
              <span className="fa fa-star-half-o review"></span>
              <p>5 Reviews</p>
              <h5 className="price-prod">${price}</h5>
              <p className="description"> {description}</p>
              <p className="info-prod">
                <span>Available : </span>
                In stock
              </p>

              <hr />
              {{ stock } && <AddToCart product={products} />}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
