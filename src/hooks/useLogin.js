import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext()
  const navigate = useNavigate();

  const login = async (
    email,
    password,
  ) => {
    setIsLoading(true)
    setError(null);

    const response = await axios.post("/api/auth/signin", {
      email,
      password,
    });
    const loginData= await response.data
    console.log(response.data);
    localStorage.setItem('user',JSON.stringify(loginData))
    localStorage.setItem('accessToken',loginData.token)
    localStorage.setItem('refreshToken',loginData.refreshToken)
    
    
    
    if(loginData.token){
      setIsLoading(false)
        dispatch({type:"LOGIN",payload: loginData})
        navigate('/')
    }

  };
  return {login, error}
};

