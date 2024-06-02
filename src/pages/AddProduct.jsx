import React, { useState } from "react";
import axios from "../hooks/axios";
import { useAuthContext } from "../hooks/useAuthContext";

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const { user } = useAuthContext();
  // Handler for form submission
  const handleSubmit = async (event) => {
    const token = localStorage.getItem('accessToken');
    event.preventDefault();
    // Here you can add your logic to handle the submission, e.g., sending data to an API
    try {

      const response = await axios.post("/api/product/save",
      {
        category: productCategory,
        title:productName,
        description: productDescription,
        price: productPrice,
        image: productImageUrl,
        sellerId:user.userId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }});
    } catch (err) { 
        console.log(err)
    }
    console.log({
      productName,
      productDescription,
      productPrice,
      productCategory,
      productImageUrl
    });
    // Reset form fields after submission
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductCategory('');
    setProductImageUrl('');
  };
  return (
    <>
      <div className="flex justify-center">
        <h1 className="neon text-3xl font-bold text-gray-800">
          Add A New Product
        </h1>
      </div>
      <hr className="mt-4 mb-14 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-neutral-400" />

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
        <div className="relative mb-10 w-2/3 min-w-[350px] h-10">
                    <input
                      value={productName}
                      onChange={(e)=>setProductName(e.target.value)}
                      className="peer w-full h-full bg-transparent text-indigo-800 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-200 focus:border-gray-800"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-600 before:border-blue-gray-200 peer-focus:before:!border-gray-600 after:border-gray-200 peer-focus:after:!border-gray-600">
                     Product Name
                    </label>
        </div>
        <div className="relative mb-10 w-2/3 min-w-[350px] h-10">
                    <input
                      value={productDescription}
                      onChange={(e)=>setProductDescription(e.target.value)}
                      className="peer w-full block  p-4 h-full bg-transparent text-indigo-800 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-200 focus:border-gray-800"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-600 before:border-blue-gray-200 peer-focus:before:!border-gray-600 after:border-gray-200 peer-focus:after:!border-gray-600">
                     Product Description
                    </label>
        </div>
        <div className="relative mb-10 w-2/3 min-w-[350px] h-10">
                    <input
                      value={productPrice}
                      onChange={(e)=>setProductPrice(e.target.value)}
                      className="peer w-full h-full bg-transparent text-indigo-800 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-200 focus:border-gray-800"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-600 before:border-blue-gray-200 peer-focus:before:!border-gray-600 after:border-gray-200 peer-focus:after:!border-gray-600">
                     Product Price
                    </label>
        </div>
        <div className="relative mb-10 w-2/3 min-w-[350px] h-10">
                    <input
                      value={productCategory}
                      onChange={(e)=>setProductCategory(e.target.value)}
                      className="peer w-full h-full bg-transparent text-indigo-800 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-200 focus:border-gray-800"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-600 before:border-blue-gray-200 peer-focus:before:!border-gray-600 after:border-gray-200 peer-focus:after:!border-gray-600">
                     Product Category
                    </label>
        </div>
        <div className="relative mb-10 w-2/3 min-w-[350px] h-10">
                    <input
                      value={productImageUrl}
                      onChange={(e)=>setProductImageUrl(e.target.value)}
                      className="peer w-full h-full bg-transparent text-indigo-800 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-200 focus:border-gray-800"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-600 before:border-blue-gray-200 peer-focus:before:!border-gray-600 after:border-gray-200 peer-focus:after:!border-gray-600">
                     Product Image URL
                    </label>
        </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
