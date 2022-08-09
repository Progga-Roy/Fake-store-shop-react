import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{

         fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(data => setProducts(data))
    },[])
   
    return (
        <div >
            <h2>All Products</h2>
          <div className='row'>
          {
            products.map(product => <Product product={product} key={product.id}></Product>)
           }
          </div>
        </div>
    );
};

export default Products;