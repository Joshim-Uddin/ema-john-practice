// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}


// useEffect(() => {
//     const storedData = getShoppingCart();
//     for (const id in storedData) {
//       const addedProduct = products.find((product) => product.id == id);
//       if (addedProduct) {
//         let quantity = storedData[id];
//         addedProduct.quantity = quantity;
//         console.log(addedProduct);
//       }
//     }
//   }, [products]);

//   const handleAddToCart = (product) => {
//     addToDb(product.id);
//   };

// const handleAddToCart = (product) => {
//     let newCart = [];
//     const exist = cart.find((pd) => pd.id == product.id);
//     if (!exist) {
//       product.quantity = 1;
//       newCart = [...cart, product];
//       setCart(newCart);
//     } else {
//       exist.quantity = exist.quantity + 1;
//       const remaining = cart.filter((pd) => pd.id !== product.id);
//       newCart = [...remaining, exist];
//     }
//     setCart(newCart);
//     addToDb(product.id);
//   };