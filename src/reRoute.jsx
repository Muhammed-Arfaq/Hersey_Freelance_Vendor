import { Navigate } from "react-router-dom"

const ReRoute = ({ children }) => {
    const token = localStorage.getItem("jwt")

    if(token) {
        return <Navigate to = {"/vendor/dashboard"} replace = {true}></Navigate>
    }
    return children
}

export default ReRoute