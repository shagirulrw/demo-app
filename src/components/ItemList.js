import { CartState } from "../context/context";

const ItemList = () => {
  const {
    state: { products, cart }, productState: { sort, byStock, byRating, searchQuery },
    dispatch,
  } = CartState();
  
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
     
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.instock);
      console.log(sortedProducts);
    }

   

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating >= byRating
      );
      // console.log(byRating);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <div className=" w-[70%] h-screen mr-4 grid md:grid-cols-3 sm:grid-cols-2 gap-2">
      {transformProducts().map((prod, index) => (
        <div key={index}>
          <div className="w-auto m-2 bg-slate-200 h-40"> img </div>
          <h2 className="text-sm pl-2">
            {prod.name} <span className="text-sm pl-2">{prod.price}</span>
          </h2>
          <div className="justify-between flex">
            {prod.instock ? (
              <p2 className="text-sm ml-2 bg-green-400 p-1">In Stock</p2>
            ) : (
              <p2 className="text-sm ml-2 p-1 bg-red-400">Out of Stock</p2>
            )}{" "}
            {cart.some((p) => p.id === prod.id) ? (
              <button 
              // onClick={()=>
              // console.log("add")}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
                className="mr-2 p-1 border-gray-950 border-solid border-2 rounded"
              >
                REMOVE
              </button>
            ) : (
              <button
              // onClick={()=>
              //   console.log("ADD")}
              onClick={() =>
            
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
                className="mr-2 p-1 border-gray-950 border-solid border-2 rounded"
              >
                ADD
              </button>
            )}
          </div>

          <div></div>
        </div>
        // <SingleProduct prod={prod} key={prod.id} />
      ))}
      {/* <p className="p-10 w-full bg-slate-400">p1</p>{" "}
      <p className="p-10 w-full bg-slate-400">p2</p>{" "}
      <p className="p-10 w-full bg-slate-400">p3</p>{" "}
      <p className="p-10 w-full bg-slate-400">p4</p> */}
    </div>
  );
};

export default ItemList;
