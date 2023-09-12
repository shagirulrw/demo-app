import React, { createContext, useContext, useReducer } from 'react';
import { Cartreducer ,productReducer} from './reducers';


const MyCart = createContext();
const Context = ({children}) => {

   const product = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 89.99,
    instock: true,
    rating: 4,
  },
  {
    id: 2,
    name: "Stylish Laptop Backpack",
    price: 59.99,
    instock: false,
    rating: 3,
  },
  {
    id: 3,
    name: "Smartphone Camera Lens Kit",
    price: 34.99,
    instock: true,
    rating: 5,
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    price: 49.99,
    instock: true,
    rating: 2,
  },
  {
    id: 5,
    name: "Fitness Activity Tracker",
    price: 74.99,
    instock: false,
    rating: 4,
  },
  {
    id: 6,
    name: "Gourmet Coffee Sampler Set",
    price: 19.99,
    instock: true,
    rating: 3,
  },
  {
    id: 7,
    name: "Professional Hair Dryer",
    price: 69.99,
    instock: true,
    rating: 5,
  },
  {
    id: 8,
    name: "Premium Noise-Canceling Headphones",
    price: 129.99,
    instock: false,
    rating: 1,
  },
  {
    id: 9,
    name: "Wireless Charging Pad",
    price: 24.99,
    instock: true,
    rating: 4,
  },
  {
    id: 10,
    name: "HD Action Camera",
    price: 129.99,
    instock: false,
    rating: 3,
  },
  {
    id: 11,
    name: "Stainless Steel Travel Mug",
    price: 14.99,
    instock: true,
    rating: 5,
  },
  {
    id: 12,
    name: "Digital Drawing Tablet",
    price: 109.99,
    instock: false,
    rating: 2,
  },
  {
    id: 13,
    name: "Smart Home Security Camera",
    price: 79.99,
    instock: true,
    rating: 4,
  },
  {
    id: 14,
    name: "High-Performance Gaming Mouse",
    price: 54.99,
    instock: true,
    rating: 3,
  },
  {
    id: 15,
    name: "Gourmet Chocolate Gift Box",
    price: 29.99,
    instock: true,
    rating: 5,
  },
  {
    id: 16,
    name: "Ultra HD 4K TV",
    price: 699.99,
    instock: false,
    rating: 2,
  },
  {
    id: 17,
    name: "Wireless Ergonomic Keyboard",
    price: 59.99,
    instock: true,
    rating: 4,
  },
  {
    id: 18,
    name: "Designer Sunglasses",
    price: 79.99,
    instock: false,
    rating: 3,
  },
  {
    id: 19,
    name: "Classic Leather Wallet",
    price: 19.99,
    instock: true,
    rating: 1,
  },
  {
    id: 20,
    name: "Smart LED Desk Lamp",
    price: 44.99,
    instock: true,
    rating: 5,
  },
];


      
     
      const [state, dispatch] = useReducer(Cartreducer, {
        products: product,
        cart: [],
      });
      
      const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byRating: 0,
        searchQuery: "",
      });
    
      // console.log(productState);
    
      return (
        <MyCart.Provider value={{ state, dispatch, productState, productDispatch }}>
          {children}
        </MyCart.Provider>
      );
    };
    
    export const CartState = () => {
      return useContext(MyCart);
    };
    
    export default Context;