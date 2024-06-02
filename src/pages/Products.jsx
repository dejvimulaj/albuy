import React, { useEffect, useState } from 'react'
import './MainPage.css'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import axios from '../hooks/axios'
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Cart from "../pages/Cart";
import ProductPage from './ProductPage'
import { useAuthContext } from '../hooks/useAuthContext'

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

const Products = () => {
const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isLoading2, setIsLoading2] = useState(false);
const [modalProduct, setModalProduct] = useState(null);
const [open, setOpen] = useState(false);
const handleClose = () => setOpen(false);
const [selectedCategory, setSelectedCategory] = useState('all');
const [categories, setCategories] = useState([]);
const { user } = useAuthContext();

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/productCategories');
      setCategories(response?.data?._embedded.productCategories);
      console.log({categories:response.data._embedded.productCategories})
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
  console.log(category)
  try {
    let url = '/api/products';
    if (category !== 'all') {
      url = `/api/products/category/${category}`;
    }
    const response = await axios.get(url);
    setProducts(response.data);
    console.log(response.data)
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
    const response = await axios.get(`/api/product/detail/${productId}/${user.userId}`);
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
  <h1 className='neon flex justify-center pt-10 text-3xl font-bold text-gray-500'>Shop for Products</h1>
  <hr className="mt-4 mb-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-neutral-400" />
  <nav className="flex gap-3 flex-wrap justify-center text-lg">
  <a
  className={`text-center my-2 cursor-pointer inline-block w-40 rounded-full px-4 py-2 font-semibold duration-200 sm:w-48 ${
    selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-indigo-200 text-blue-800 hover:bg-indigo-600 hover:text-white'
  }`}
  onClick={() => fetchProductsByCategory('all')}
>
  All
</a>
{categories && categories.map((category) => (
  <a
    // key={category.categoryName}
    className={`text-center my-2 cursor-pointer inline-block w-40 rounded-full px-4 py-2 font-semibold duration-200 sm:w-48 ${
      selectedCategory === category.categoryName ? 'bg-indigo-600 text-white' : 'bg-indigo-200 text-blue-800 hover:bg-indigo-600 hover:text-white'
    }`}
    onClick={() => fetchProductsByCategory(category.categoryName)}
  >
    {category.categoryName.charAt(0).toUpperCase() + category.categoryName.slice(1)}
  </a>
))}

</nav>
  
  <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
  {isLoading ? (
        <Loader/>
      ) : products.length > 0 ? (
        <>
          {products && products.map(product => (
            <ProductCard key={product.id} product={product} onCardClick={handleCardClick} ></ProductCard>
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
                <ProductPage product={modalProduct} onClose={handleClose}/>
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

export default Products
