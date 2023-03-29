import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(()=>{
        const storedProduct = getShoppingCart()
        let savedProducts = []
        for(const id in storedProduct){
            const addedProduct = products.find(product=>product.id== id);
            if(addedProduct){
           let quantity = storedProduct[id];
           console.log(quantity)
           addedProduct.quantity = quantity;
        }
        console.log(addedProduct)
        }
        
        
        
        
    },[products])

    const [cart, setCart] = useState([])
    const handleAddToCart = product=>{
        addToDb(product.id)
        const newCart = [...cart, product];
        setCart(newCart)
    }
    // const [productOnLocalStorage, setProductOnLocalStorage] = useState([])
    
    return (
        <div>
            <Header />
            <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product=> <Product product = {product} handleAddToCart={handleAddToCart} key={product.id} />)
            }
            </div>
            <div className='cart'>
                <Cart cart={cart} 
                // newP={productOnLocalStorage} 
                />
            </div>
            </div>
            </div>
        
    );
};

export default Shop;