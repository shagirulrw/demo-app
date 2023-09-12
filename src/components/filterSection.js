// import React, { useState } from "react";
import Rating from "./ratingindicator";
import { CartState } from "../context/context";

const FilterSection = () => {
  const {
    productDispatch,
    productState: { byRating, byStock, sort },
  } = CartState();
  // const [selectedOption, setSelectedOption] = useState("");

  // const [rate, setrate] = useState(3);

  // const [isTrue, setIsTrue] = useState(false);

  // const toggleValue = () => {
  //   setIsTrue((prevValue) => !prevValue);
  //   console.log(isTrue);
  // };
  // const handleRadioChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  return (
    <div className="bg-slate-700 w-[30%] h-[60%] ml-5 mr-5 mb-5 flex flex-col">
      <h1 className="text-2xl text-center text-cyan-50 p-5">Filter Product</h1>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-600"
          name="group1"
          // value="Ascending"
          // checked={sort}
          checked={sort === "lowToHigh" ? true : false}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
        />
        <span className="ml-2 text-white ">Ascending</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-600"
          name="options"
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
          // onChange={handleRadioChange}
        />
        <span className="ml-2 text-white ">Descending</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-600"
          name="stocks"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
          // onChange={()=>  productDispatch({
          //   type: "FILTER_BY_STOCK",

          // })}
        />
        <span className="ml-2 text-white ">Include Out of Stock</span>
      </label>
      <Rating
        rating={byRating}
        onClick={(i) =>
          productDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1,
          })
        }
      ></Rating>
      <button
        className="px-3 bg-white w-[40%] mt-10 h-[10%] mx-auto"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterSection;
