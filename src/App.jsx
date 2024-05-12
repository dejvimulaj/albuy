import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import SellerProfile from "./pages/SellerProfile";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Loader from "./components/Loader";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<ProductPage />} path="/product/:productId" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Checkout />} path="/checkout" />
          <Route element={<Products />} path="/products" />
          <Route element={<AdminDashboard />} path="/admindashboard" />
          <Route element={<SellerDashboard />} path="/sellerdashboard" />
          <Route element={<MainPage />} path="/" exact />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
      </Routes>
    </Router>

  );
}

export default App;
