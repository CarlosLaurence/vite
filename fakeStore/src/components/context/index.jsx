import React, {createContext, useEffect, useState} from 'react'

export const ShopiContext = createContext();

export const ShopiProvider = ({ children }) => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);

    const openDetailProduct = () => {
      setIsProductDetailOpen(true);
      setIsCheckOutOpen(false);
    }
    const closeDetailProduct = () => setIsProductDetailOpen(false);
    const openCheckOut = () => {
      setIsCheckOutOpen(true);
      setIsProductDetailOpen(false);
    }
    const closeCheckOut = () => setIsCheckOutOpen(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error:', error));
    }, []);

  return (
    <ShopiContext.Provider value= {{
        items,
        count, 
        setCount, 
        isProductDetailOpen,
        openDetailProduct,
        closeDetailProduct,
        isCheckOutOpen,
        openCheckOut,
        closeCheckOut,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts
    }}>{children}</ShopiContext.Provider>
  )
}
