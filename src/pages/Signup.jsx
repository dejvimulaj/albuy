import axios from "../hooks/axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sellerAccount, setSellerAccount] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [fullName, setFullName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFullNameChange = (event) => {
      const fullName = event.target.value;
      setFullName(fullName);
      const nameParts = fullName.trim().split(' ');
      if (nameParts.length > 1) {
          setFirstName(nameParts[0]); // Assumes the first part is the first name
          setLastName(nameParts[nameParts.length - 1]); // Assumes the last part is the surname
      } else {
          setFirstName(fullName); // Only one name part available
          setLastName('');
      }
  };
  const navigate = useNavigate();
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email address is invalid.";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required.";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    
    let role = "";
    if (sellerAccount == false) {
      role = "BUYER";
    } else {
      role = "SELLER";
    }
    console.log("Form submitted:", { email, password,firstName, lastName, role, companyName });
try {

    const response = await axios.post("/api/auth/signup", {
      "firstName":firstName,
      "lastName":lastName, 
      "email":email,
      "password":password,
      "role":role,
      "companyName":companyName,
    });
    navigate('/login')
  } catch (err) { 
      console.log(err)
  }

    
  };

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSellerAccount(isChecked);
    if (!isChecked) {
      setCompanyName(""); // Reset companyName if checkbox is unchecked
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-start py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="neon flex justify-center pt-10 text-3xl font-extrabold text-gray-900">
          ALBuy
        </h1>
        <h2 className="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign up to our website
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
          or {"   "}
          <Link
            to="/login"
            className="font-medium text-indigo-400 hover:text-indigo-600 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Sign in to existing account
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="fullName"
                  name="fullName"
                  type="fullName"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={fullName} 
                  onChange={handleFullNameChange}
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 flex">
              <label
                htmlFor="email"
                className="block text-sm mr-3 font-medium leading-5 text-gray-700"
              >
                Sign up as seller
              </label>
              <label className="relative mb-5 cursor-pointer">
                <input type="checkbox" value={sellerAccount} onChange={handleCheckboxChange} className="peer sr-only " />
                <div className="peer  h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
              </label>
            </div>
            {sellerAccount && (
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium leading-5 text-gray-700">
                  Company Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required={sellerAccount}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
