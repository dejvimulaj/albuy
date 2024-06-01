import React, { useEffect, useState } from 'react'
import './MainPage.css'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import axios from 'axios'
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Cart from "../pages/Cart";
import ProductPage from './ProductPage'
import SellerProductCard from '../components/SellerProductCard'
import SellerProductPage from './SellerProductPage'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1600,
  height:600,
  bgcolor: '#F5F5F5',
  borderRadius:3,
  boxShadow: 24,
  p: 4,
};

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
        console.log({categories:response.data})
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
    fetchProductsByCategory('all'); // Initially fetch all products
  }, []);
  
  const fetchProductsByCategory = async (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    try {
      let url = 'https://fakestoreapi.com/products';
      if (category !== 'all') {
        url = `https://fakestoreapi.com/products/category/${category}`;
      }
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCardClick = async (productId) => {
    setIsLoading2(true)
    setOpen(true)
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setModalProduct(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching product details:', error);
    }finally{
      setIsLoading2(false)
    }
    
  };
  
  
    return (
    <>
    <h1 className='neon flex justify-center pt-10 text-3xl font-bold text-gray-500'>My Products</h1>
    <hr className="mt-4 mb-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-neutral-400" />
    
    <div className="flex flex-wrap gap-4 justify-center ">
  {/* card 1 */}
  <div className="flex flex-col gap-2 h-36 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-indigo-700 bg-opacity-50 backdrop-filter backdrop-blur-lg">
    <div className="font-semibold text-lg">Total Units Sold</div>
    <div className="font-semibold text-5xl tracking-tight">10 Units</div>
  </div>
  {/* card 2 */}
  <div className="flex flex-col gap-2 h-36 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-indigo-700 bg-opacity-30 backdrop-filter backdrop-blur-lg">
    <div className="font-semibold text-lg">Total Orders</div>
    <div className="font-semibold text-5xl tracking-tight just">10</div>
  </div>
  <div className="flex flex-col gap-2 h-36 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-indigo-700 bg-opacity-50 backdrop-filter backdrop-blur-lg">
    <div className="font-semibold text-lg">Total Revenue</div>
    <div className="font-semibold text-5xl tracking-tight">$9.524</div>
  </div>
</div>


    <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {isLoading ? (
          <Loader/>
        ) : products.length > 0 ? (
          <>
            {products.map(product => (
              <SellerProductCard key={product.id} product={product} onCardClick={handleCardClick} ></SellerProductCard>
            ))}
          </>
        ) : (
          <p>No products found.</p>
        )}
    </section>
    {isLoading2 ? (
          <Loader/>
        ):
    <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <SellerProductPage product={modalProduct} onClose={handleClose}/>
                </Box>
              </Modal>}
    
    <div className="flex justify-center my-10"id='pagination'>
  
      {/* Previous Button */}
      <a
        href="#"
        className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </a>
      <a
        href="#"
        className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      </div>
    </>
    )
  }

export default SellerDashboard
