import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { ProductsProvider } from "./context/products_context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-74mfe0u8.us.auth0.com"
    clientId="Y3quaX4CvG13spfpoVhszBqOctISrvy7"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
    <CartProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CartProvider>
    </UserProvider>
  </Auth0Provider>,
);

reportWebVitals();
