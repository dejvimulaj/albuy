import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import Forbidden from "./pages/Forbidden";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useAuthContext();

  // Use useEffect to handle state updates based on the `user` object
  useEffect(() => {
    setLoggedIn(!!user); // `!!user` will convert truthy/falsy values to true/false
  }, [user]); // Dependency array with `user` ensures this runs only when `user` changes

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index element={<MainPage />} />
          <Route path="/product/:productId" element={loggedIn ? <ProductPage /> : <Forbidden />} />
          <Route path="/cart" element={loggedIn ? <Cart /> : <Forbidden />} />
          <Route path="/products" element={loggedIn ? <Products /> : <Forbidden />} />
          <Route path="/admindashboard" element={user&& loggedIn && user.role=="ADMIN" ? <AdminDashboard /> : <Forbidden />} />
          <Route path="/sellerdashboard" element={user&& loggedIn && user.role=="SELLER" ? <SellerDashboard /> : <Forbidden />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;