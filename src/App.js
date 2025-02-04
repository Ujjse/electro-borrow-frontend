
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
<<<<<<< Updated upstream
=======
import "normalize.css";

>>>>>>> Stashed changes


// Toast Config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/login/login';
import Register from './pages/register/register';
import UserDashboard from './pages/user_dashboard/UserDashboard';
import AdminDashboard from './pages/admin/admin_dashboard/AdminDashboard';
import UpdateProduct from './pages/admin/update_product/UpdateProduct';
import AdminRoutes from './pages/protected_routes/AdminRoutes';
<<<<<<< Updated upstream
=======
import ProductDetail from './pages/product_detail/ProductDetail';
import BookingPage from './pages/booking/Booking';
import ConfirmBooking from './pages/confirm_booking/ConfirmBooking';
import UpdateInformation from './pages/update_info/UpdateInformation';
import Esewa from './pages/Esewa/Esewa';
import BuyNowPage from './pages/buy_now/BuyNowPage';
import MyOrdersPage from './pages/order/MyOrder';
import ContactPage from './pages/contact/ContactPage ';
import RentPage from './pages/rent/RentPage';
import CartPage from './pages/cart/Cart';
import FavoritesPage from './pages/favourites/Favourite';
import ForgotPassword1 from './pages/forgot_password/ForgotPassword1';
import UpdateAddress from './pages/address/ManageAddress';
>>>>>>> Stashed changes


function App() {
  return (
      <Router>
        <ToastContainer />
        <Routes>
          
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<UserDashboard />} />
<<<<<<< Updated upstream
          
=======
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/confirm-booking' element={<ConfirmBooking />} />
          <Route path='/update-information' element={<UpdateInformation />} />
          <Route path="/buy_now/:id" element={<BuyNowPage />} />
          <Route path="/esewa" element={<Esewa />} />
          <Route path="/my-orders" element={<MyOrdersPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path='/forgot_password' element ={<ForgotPassword1 />} />
          <Route path='/address' element ={<UpdateAddress />} />

>>>>>>> Stashed changes


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
