import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (

        <div className="info">
            <div className="content">
                <div className="head">
                    <h1> Welcome to the portal </h1>
                    <p> Register new product payment via Cyrpto Wallet at a reasonalble price </p>
                    <Link to="/product">
                        <button>Go To Products</button>
                    </Link>
                </div>
            </div>
            <div className="pic"></div>
        </div>

    );
}