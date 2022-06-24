import logo from './logo.svg';
import { Route, Routes, Link } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './pages/Home/home';
import Product from './pages/Product/product';
import Navbar from './component/Navbar/Navbar';
// const Home = lazy(() => import("./pages/Home/home"));
//const Product = lazy(() => import("./pages/Product/product"));

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
