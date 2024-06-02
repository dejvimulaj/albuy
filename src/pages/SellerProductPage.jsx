import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Rating } from "@mui/material";
import axios from "../hooks/axios";
import { useAuthContext } from "../hooks/useAuthContext";

const SellerProductPage = ({ product, handleClose }) => {
  const [selected, setSelected] = useState("");
  const [reviewTab, setReviewTab] = useState(false)
  const { user } = useAuthContext();
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('accessToken')
    try {
      const response = await axios.delete(`/api/products/delete/${product.id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }}
      );

    } catch (err) { 
        console.log(err)
    }
  }

  const options = [
    { key: "red", value: "red" },
    { key: "blue", value: "blue"},
    { key: "green", value: "green" },
  ];

  return (
    <div className="flex justify-between">
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-5xl mt-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full bg-gray-100 object-contain"
                src={product.image}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4"></p>
            <div className="flex mt-6 mb-4">
              <div className="mr-4">
                <span className="font-bold text-xl text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-[#38903e] text-xl ml-2 font-bold">
                  ${product.price}
                </span>
              </div>
              <div className="flex">
                <span className="font-bold text-xl text-gray-700 ml-5 mr-2 dark:text-gray-300">
                  Rating
                </span>
                <span className="text-gray-600 flex text-xl dark:text-gray-300">
                  <p>{product.rating > 0 ? product.rating : "New"}</p>{" "}
                  <FaStar className="mt-[4px] ml-1" color="gold" />
                </span>
              </div>
            </div>
            <div className="mb-4 mt-10">
              <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Options</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    label="Options"
                    onChange={handleChange}
                  >
                    {options.map((option) => (
                      <MenuItem value={option.value}>{option.key}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="mt-12">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
            <div className="flex top-[80%] absolute w-1/3 -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button onClick={handleDelete} className="w-full bg-red-700 text-white py-2 px-4 rounded-[15px] font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{ reviewTab?
    <div className="w-[440px] ml-16 flex-col justify-center align-middle bg-white shadow-md rounded-xl duration-500  hover:shadow-xl">
                 <div className="w-full mt-2">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-50 p-3 rounded-lg shadow mb-2 mx-4"
                >
                  <p className="text-sm font-bold">{review.user}</p>
                  <p className="text-sm">{review.description}</p>
                  <Rating
                    name="read-only"
                    value={Math.round(review.rating * 2) / 2}
                    readOnly
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-2xl text-center">
                No Reviews Yet...
              </p>
            )}
          </div>
    </div>
    :<div onClick={()=>setReviewTab(true)} className="w-[440px] ml-16 flex-col justify-center align-middle bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <h1 className=' flex justify-center mt-5 text-3xl font-bold text-gray-500'>Click to</h1>
    <h1 className=' flex justify-center mt-5 text-3xl font-bold text-gray-500'>View Reviews</h1>
    </div>}
    </div>
  );
};

export default SellerProductPage;
