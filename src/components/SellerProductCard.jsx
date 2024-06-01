import React, { useState } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import "../pages/MainPage.css";
import { FaCheckSquare, FaRegCheckCircle, FaStar } from "react-icons/fa";
import useCartStore, { useCartChipStore } from "../hooks/store";
import { IoBagCheck } from "react-icons/io5";
const SellerProductCard = ({ product, onCardClick }) => {

  const [buttonLogo, setButtonLogo] = useState(
    <TbShoppingBagPlus className="hover:animate-bounce" size={"35px"} />
  );

  return (
    <div onClick={() => onCardClick(product.id)}  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-300">
      <a href="#">
        <img
          src={product.image}
          alt="Product"
          className="h-80 w-72 object-contain rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-600 mr-3 uppercase flex text-xs">
            <p>{product.rating.rate > 0 ? product.rating.rate : "New"}</p>{" "}
            <FaStar className="mt-[2px] ml-1" color="gold" />
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${product.price}
            </p>
            <div
              className="ml-auto p-1 hover:bg-gray-300 hover:animate-pulse rounded-full"
              onClick={(e)=>{
                e.preventDefault()
                const originalLogo = buttonLogo;
                setButtonLogo(<FaRegCheckCircle color="green" className="animate-spin" size={"28px"}></FaRegCheckCircle>);
            
                setTimeout(() => {
                  setButtonLogo(originalLogo);
                }, 1500);

              }}
            >
               
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SellerProductCard;
