import React, {createContext, useEffect, useState} from 'react'

export const ShopiContext = createContext();

export const ShopiProvider = ({ children }) => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [searchItemByCategory, setSearchItemByCategory] = useState('');
    const [filteredItems, setFilteredItems] = useState('');
    

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

    const filteredItemsByTitle = (items, searchByTitle) => {
      return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    const filteredItemsByCategory = (items, searchItemByCategory) => {
        return items?.filter((item) => item.category.toLowerCase().includes(searchItemByCategory.toLowerCase()));
    }
    
    const filterBy = (searchType, items, searchItem, searchItemByCategory) => {
      if(searchType === 'BY_TITLE'){
          return filteredItemsByTitle(items, searchItem);
      }

      if(searchType === 'BY_CATEGORY'){
          return filteredItemsByCategory(items, searchItemByCategory);
      }

      if(searchType === 'BY_TITLE_AND_CATEGORY'){
          return filteredItemsByCategory(items, searchItemByCategory).filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()));
      }

      if(!searchType){
          return items;
      }
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
      if(searchItem && searchItemByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchItem, searchItemByCategory));
      if(searchItem && !searchItemByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchItem, searchItemByCategory));
      if(!searchItem && searchItemByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchItem, searchItemByCategory));
      if(!searchItem && !searchItemByCategory) setFilteredItems(filterBy(null, items, searchItem, searchItemByCategory));
  },[items, searchItem, searchItemByCategory]);

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
        setCartProducts,
        orders,
        setOrders,
        setSearchItem,
        setSearchItemByCategory,
        filteredItems
    }}>{children}</ShopiContext.Provider>
  )
}
