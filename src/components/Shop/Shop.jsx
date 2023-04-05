import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Product from "../Product/Product";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  const products = useLoaderData();

  useEffect(() => {
    //get data from locat storage and save to variable
    const storedData = getShoppingCart();
    const savedProducts = [];
    //loop through stored data to get id
    for (const id in storedData) {
      //using id find product
      const addedProduct = products.find((pd) => pd.id == id);
      //product is found so quantity is updating
      if (addedProduct) {
        let quantity = storedData[id];
        addedProduct.quantity = quantity;
        savedProducts.push(addedProduct);
      }
    }
    setCart(savedProducts);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    //first check if the product exists in cart
    const exist = cart.find((pd) => pd.id == product.id);
    if (!exist) {
      //As product is not in cart so it is new and it's quantity is 0. so quantity set as 1
      product.quantity = 1;
      //product is added in cart array
      newCart = [...cart, product];
    } else {
      //As product exists in cart so the quantity of the product increased by 1
      exist.quantity = exist.quantity + 1;
      //After modifying exists product quantity update the cart with remaining products and updated product
      const remaining = cart.filter((pd) => pd.id !== exist.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.id}
            />
          ))}
        </div>
        <div className="cart">
          <Cart
            cart={cart}
            // newP={productOnLocalStorage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
