import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarSetup from "./components/NavbarSetup";
import { FaPlus } from "react-icons/fa";
import { Box, Modal } from "@mui/material";
import AddProduct from "./pages/AddProduct";
import { useAuthContext } from "./hooks/useAuthContext";
import { useLogin } from "./hooks/useLogin";
import Loader from "./components/Loader";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:700,
  bgcolor: '#F5F5F5',
  borderRadius:3,
  boxShadow: 24,
  p: 4,
};

const PrivateRoutes = () => {


const [open, setOpen] = useState(false);
const handleClose = () => setOpen(false);
const handleOpen = () => setOpen(true);
const {isLoading} = useLogin()
const { user } = useAuthContext();

useEffect(() => {
  // This will run when `user` changes
  console.log('User has changed:', user);
}, [user]);
  
  return  (
    <>
    {isLoading?<Loader/>
    :
    <>
      <NavbarSetup></NavbarSetup>
      <Outlet />
{user && user.role =="SELLER" ?<>
      <button onClick={handleOpen} className="fixed bottom-5 right-5 p-9 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 hover:animate-spin focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
          <FaPlus size={"25px"}></FaPlus>
        </button>
        <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <AddProduct/>
              </Box>
            </Modal>
      </>: <></>}
      <footer className=" rounded-lg shadow m-4 bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl  p-4 md:flex md:items-center md:justify-between">
          <span className="text-md text-white font-extrabold sm:text-center ">
            © 2024{" "}
            <a className="hover:underline">
              ALBuy™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-md text-white font-extrabold sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    
    </>
    
  }
  
    </>
  ) 
};

export default PrivateRoutes;
