import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatClient from './Vendor/ChatClient/ChatClient';
import CompleteSignup from './Vendor/CompleteSignup/CompleteSignup';
import VendorDashboard from './Vendor/Dashboard/VendorDashboard';
import VendorLogin from './Vendor/Login/Login';
import ManageOrder from './Vendor/ManageOrder/ManageOrder';
import MyProfile from './Vendor/MyProfile/MyProfile';
import PostGig from './Vendor/PostGig/PostGig';
// import PostManagement from './Vendor/PostManagement/PostManagement';
import VendorSignup from './Vendor/Signup/Signup';
import VendorOtp from './Vendor/Signup/VendorOtp';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/vendor/login' element={<VendorLogin />}/>
          <Route path='/vendor/signup' element={<VendorSignup />}/>
          <Route path='/vendor/dashboard' element={<VendorDashboard />}/>
          <Route path='/vendor/postGig' element={<PostGig />}/>
          <Route path='/vendor/chat' element={<ChatClient />}/>
          <Route path='/vendor/manageOrder' element={<ManageOrder />}/>
          {/* <Route path='/vendor/managePost' element={<PostManagement />}/> */}
          <Route path='/vendor/profile' element={<MyProfile />}/>
          <Route path='/vendor/verifyOTP' element={<VendorOtp />}/>
          <Route path='/vendor/completeSignup' element={<CompleteSignup />}/>
        </Routes>
      </Router>
      <Toaster/>
    </div>
  )
}

export default App