import { Navigate } from "react-router-dom"

const protectedRoutes = ({ children }) => {
    const token = localStorage.getItem("jwt")

    if(!token) {
        return <Navigate to = {"/vendor/login"} replace = {true}></Navigate>
    }
    return children
}

export default protectedRoutes