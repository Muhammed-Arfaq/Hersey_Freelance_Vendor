import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
import ReRoute from './reRoute';
// import ChatClient from './Vendor/ChatClient/ChatClient';
import CompleteSignup from './Vendor/CompleteSignup/CompleteSignup';
import VendorDashboard from './Vendor/Dashboard/VendorDashboard';
import VendorLogin from './Vendor/Login/Login';
import ManageOrder from './Vendor/ManageOrder/ManageOrder';
import MyProfile from './Vendor/MyProfile/MyProfile';
import PageNotFound from './Vendor/PageNotFound/PageNotFound';
import PostGig from './Vendor/PostGig/PostGig';
import VendorSignup from './Vendor/Signup/Signup';
import VendorOtp from './Vendor/Signup/VendorOtp';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ReRoute><VendorLogin /></ReRoute>}/>
          <Route path='/vendor/signup' element={<ReRoute><VendorSignup /></ReRoute>}/>
          <Route path='/vendor/verifyOTP' element={<ReRoute><VendorOtp /></ReRoute>}/>
          <Route path='/vendor/completeSignup' element={<CompleteSignup />}/>
          <Route path='/vendor/dashboard' element={<ProtectedRoutes><VendorDashboard /></ProtectedRoutes>}/>
          <Route path='/vendor/postGig' element={<ProtectedRoutes><PostGig /></ProtectedRoutes>}/>
          {/* <Route path='/vendor/chat' element={<ProtectedRoutes><ChatClient /></ProtectedRoutes>}/> */}
          <Route path='/vendor/manageOrder' element={<ProtectedRoutes><ManageOrder /></ProtectedRoutes>}/>
          <Route path='/vendor/profile' element={<ProtectedRoutes><MyProfile /></ProtectedRoutes>}/>
          <Route path='*' element={<PageNotFound/>}/> 
        </Routes>
      </Router>
      <Toaster/>
    </div>
  )
}

export default App