import React, { useEffect } from "react";
import Header from "./components/Header";
import axios from "axios";
import { getProducts } from "./apis/productApi";
import Product from "./components/Product";

function App() {
  // js 코딩 자리

  // jsx 자리
  return (
    <div>
      <Header />
      <Product />
    </div>
  );
}

export default App;
