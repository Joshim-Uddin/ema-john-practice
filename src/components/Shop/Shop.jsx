import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const [cart, setCart] = useState([])
    const addToCart = product=>{
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div>
            <Header />
            <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product=> <Product product = {product} addToCart={addToCart} key={product.id} />)
            }
            </div>
            <div className='cart'>
                <h3>Shopping cart</h3>
                <p>Product items : {cart.length} </p>
            </div>
            </div>
            </div>
        
    );
};

export default Shop;