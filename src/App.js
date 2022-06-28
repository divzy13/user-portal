//import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Spinner from './component/Spinner/Spinner';

const Cart = lazy(() => import("./pages/Cart/CartItems"));
const Home = lazy(() => import("./pages/Home/home"));
const ErrorPage = lazy(() => import("./pages/Error/Error"));
const Product = lazy(() => import("./pages/Product/product"));
const SingleProduct = lazy(() =>
  import("./pages/SingleProduct/SingleProduct")
);

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProduct />}
          ></Route>
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
