import { Box, Drawer } from "@mui/material";
import React from "react";
import { GrRadialSelected } from "react-icons/gr";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";

const Cart = ({}) => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="neon text-3xl mr-6 font-bold text-gray-800">
          My Shopping Cart
        </h1>
        <MdShoppingCartCheckout size={"40px"} />
      </div>
      <hr className="mt-4 mb-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-neutral-400" />

      <div className="h-5/6 overflow-y-scroll">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                alt="product-image"
                className="w-full object-contain rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019 
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <p
                      className="w-8 text-center text-xs outline-none"
                    >1</p>
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">$399.99</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          {/* Shipping */}
          <div className="flex-col w-1/3" >
          <div className="mt-6 h-auto mb-8 rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
            <div className="mb-2 flex justify-between">
            <div className="w-72">
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-indigo-800 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-indigo-200 focus:border-gray-800"
      placeholder=" " />
      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-600 before:border-blue-gray-200 peer-focus:before:!border-gray-600 after:border-gray-200 peer-focus:after:!border-gray-600">Address
    </label>
  </div>
</div> 
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Payment Method</p>
              <div className="flex">
                <GrRadialSelected color="gray" className="mt-1 mr-2" size={18}/>
                <p className="mb-1 text-lg font-bold">Cash</p>
              </div>
            </div>
          </div>
            {/* Subtotal */}
          <div className="mt-6 h-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">FREE</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="flex justify-center mt-6 w-full rounded-md bg-gray-300 hover:bg-gray-200 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Checkout
            <IoBagCheckOutline className="ml-1 mt-[2px]" size={19} />
            </button>
          </div>
          

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
