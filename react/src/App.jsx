import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/product';

function App() {
  const products = [{
    id: 1,
    name: "iPhone 11",
    price: 55000,
    inStock: false

  },
  {
    id: 2,
    name: "iPhone 12",
    price: 56000,
    inStock: false

  }, {
    id: 3,
    name: "iPhone 13",
    price: 57000,
    inStock: true
  }, {
    id: 4,
    name: "iPhone 14",
    price: 58000,
    inStock: false
  }, {
    id: 5,
    name: "iPhone 15",
    price: 59000,
    inStock: true
  }, {
    id: 6,
    name: "iPhone 16",
    price: 68000,
    inStock: true
  }, {
    id: 7,
    name: "iPhone 17",
    price: 79000,
    inStock: true
  }]

  return (
    <>
      <Navbar />
      <h1>Welcome to REACT App..</h1>
      {
        products.map((product) => (
          <Product key={product.id} name={product.name} price={product.price} inStock={product.inStock} />

        ))
      }
    </>

  );

}

export default App
