import ItemList from "./ItemList";
import FilterSection from "./filterSection";

const AppBody = () => {
  return (
    <div className="flex pt-10 h-screen">
      <FilterSection></FilterSection> 
      <ItemList></ItemList>
    </div>
  );
};

export default AppBody;
