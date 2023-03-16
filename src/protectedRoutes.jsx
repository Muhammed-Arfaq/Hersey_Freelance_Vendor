import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { vendorAuth } from "./api"
import { setData } from "./Redux/Reducer/editProfileModal"

const ProtectedRoutes = ({ children }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("jwt")

    if (token) {
        const vendorId = localStorage.getItem("vendorId")
        vendorAuth(vendorId, token).then((result) => {
            const status = result.data.userData.status
            if(status == 'Blocked'){
                localStorage.clear();
                window.location.reload()
            }
            dispatch(setData(result.data.userData))
        })
    }

    if(!token) {
        return <Navigate to = {"/"} replace = {true}></Navigate>
    }
    return children
}

export default ProtectedRoutes