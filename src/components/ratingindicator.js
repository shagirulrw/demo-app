// import { FaBeer, FaUser } from 'react-icons/fa';
// const RatingIndictor = ({rating ,onClick}) => {
//     return (
//     // <div> <FaHome size={32} color="blue" />
//     // <FaUser size={32} color="green" /></div>

//         <>{
//         [Array(5)].map((_,i)=>(<span key={i} onClick={onClick} >{(rating>i)?(<FaBeer/>):<FaUser/>}</span>))
// }</>

// );
// }

// export default RatingIndictor;
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <div className="flex flex-row  items-center">
      {" "}
      <span className="text-white pr-2">Rating </span>{" "}
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={() => onClick(i)}
          style={style}
          className="flex
     flex-row"
        >
          {rating > i ? (
            <AiFillStar fontSize="15px" color="white" />
          ) : (
            <AiOutlineStar fontSize="15px" color="white" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
