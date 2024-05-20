import propTypes from "prop-types";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
const Card = ({ imgSrc, altText, name, price, change }) => {
  return (
    <div className=" flex min-w-[70px] max-w-[150px] items-center flex-col bg-gray-100 py-2">
      <img src={imgSrc} alt={altText} height={50} width={50} />
      <h5>{name}</h5>
      <p>${price}</p>
      {change > 0 ? (
        <span className="flex text-green-400">
          <FiArrowUpRight />
          {change}%
        </span>
      ) : (
        <span className="flex text-red-400">
          <FiArrowDown />
          {change}%
        </span>
      )}
    </div>
  );
};

Card.propTypes = {
  imgSrc: propTypes.string,
  altText: propTypes.string,
  name: propTypes.string,
  price: propTypes.string,
  change: propTypes.string,
};

export default Card;
