import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "./axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext()

  const login = async (
    email,
    password,
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await axios.post("/api/auth/signin", {
      email,
      password,
    });
    const loginData= await response.data
    console.log(response.data);
    if(!response.ok){
        setIsLoading(false)
        setError(signupData.error)
    }
    if(response.ok){
        localStorage.setItem('user',JSON.stringify(loginData))
        localStorage.setItem('accessToken',loginData.token)
        localStorage.setItem('refreshToken',loginData.refreshToken)
        setIsLoading(false)
    }

    dispatch({type:"LOGIN",})

  };
  return {login, error}
};

