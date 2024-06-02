import { useNavigate } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const navigate =useNavigate()

    const {dispatch }= useAuthContext()
  
    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        dispatch({type:'LOGOUT'})
        navigate('/login')
    }

    return {logout}
}
