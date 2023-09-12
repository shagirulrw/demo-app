import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CartState } from "../context/context";
const Header = () => {
  const {
    state: { cart,  },productDispatch,
    productState: { searchQuery } ,
    dispatch,
  } = CartState();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-slate-400 h-20 justify-between flex items-center">
      <h2 className="text-xl p-7">Shopping Cart</h2>
      <input className="mx-auto w-[30%]" placeholder="Search Item" onChange={(e)=>{
        productDispatch({
          type:"FILTER_BY_SEARCH",
          payload: e.target.value
        })
      }} value={searchQuery}></input>
      <button onClick={toggleDropdown} className="p-4 mr-7 bg-white">
        Cart({cart.length})
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-white border w-[24%] border-gray-300 py-2 px-4 rounded right-[6%] top-[6%]">
          {/*          
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li> */}
          {cart.length === 0 ? (
            <div>No item here</div>
          ) : (
            <div>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <button className="px-3"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                  >remove
                    {/* <AiFillStar fontSize="15px" color="white" /> */}
                  </button>
                </li>
              ))}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Header;
