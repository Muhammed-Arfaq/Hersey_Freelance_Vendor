import { Navigate } from "react-router-dom"
import { vendorAuth } from "./api"

const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem("jwt")

    if (token) {
        const vendorId = localStorage.getItem("vendorId")
        vendorAuth(vendorId, token).then((result) => {
            const status = result.data.userData.status
            if(status == 'Blocked'){
                localStorage.clear();
                window.location.reload()
            }
        })
    }

    if(!token) {
        return <Navigate to = {"/vendor/login"} replace = {true}></Navigate>
    }
    return children
}

export default ProtectedRoutes