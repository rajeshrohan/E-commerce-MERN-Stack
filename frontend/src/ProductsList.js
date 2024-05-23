import Product from './Product';
import { useEffect, useState } from 'react';
import ProductsData from './data';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async ()=>{
    const res = await axios.get('http://localhost:8080/products');
    console.log(res.data);
    setProducts(res.data);
  }

  useEffect(()=>{
    getProducts();
  }, []);

  const handleClick = (productId) => {
    console.log(`Product ${productId} clicked`);
    // Add your handleClick functionality here
  };

  return (
    <>
      {products.map((product, index) => (
        <Product {...product} key={index} handleClick={handleClick}></Product>
      ))}
    </>
  );
};

export default ProductList;
