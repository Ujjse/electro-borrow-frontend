
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';


// Toast Config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/login/login';
import Register from './pages/register/register';
import UserDashboard from './pages/user_dashboard/UserDashboard';
import AdminDashboard from './pages/admin/admin_dashboard/AdminDashboard';
import UpdateProduct from './pages/admin/update_product/UpdateProduct';
import AdminRoutes from './pages/protected_routes/AdminRoutes';


function App() {
  return (
      <Router>
        <ToastContainer />
        <Routes>
          
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<UserDashboard />} />
          


          { <Route element={<AdminRoutes />}>
          <Route path='/admin/dashboard' element={< AdminDashboard />} />
          <Route path='/admin/update/:id' element={<UpdateProduct />} />
          
          </Route>
}

          </Routes>
      </Router>
      );
      }
          



export default App;
