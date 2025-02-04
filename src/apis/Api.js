import axios from 'axios';

const Api= axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});


const config = {
    headers: {
'Authorization' : `Bearer ${localStorage.getItem('token')}`,
    },
};


// test api
export const testApi = () => Api.get('/test');

export const register = (data) => Api.post('/api/user/register', data);
export const login = (data) => Api.post('/api/user/login', data);

export const createProduct = (data) => Api.post('/api/product/create', data)


<<<<<<< Updated upstream
export const getAllProducts = (page, limit) => Api.get(`/api/product/get_all_products?page=${page}&limit=${limit}`, config);
=======

export const getAllProducts = (page, limit) => Api.get(`/api/product/get_all_products?page=${page}&limit=${limit}`, config);
// export const getAllProducts = async (page, limit) => {
//   try {
//     const res = await Api.get(`/api/product/get_all_products?page=${page}&limit=${limit}`, config);
//     return res;
//   } catch (error) {
//     console.error('API Error:', error);
//     if (error.response) {
//       // Log the response from the server
//       console.error('Response:', error.response.data);
//     } else {
//       // This will log network or other errors
//       console.error('Network or other error:', error.message);
//     }
//   }
// };
>>>>>>> Stashed changes

export const getSingleProduct = (id) => Api.get(`/api/product/get_single_product/${id}`, config);


export const deleteProduct = (id) => Api.delete(`/api/product/delete_product/${id}`, config);

export const updateProduct = (id, data) => Api.put(`/api/product/update_product/${id}`, data, config);
<<<<<<< Updated upstream
=======


export const updateInformation = async (data, token) => {
    try {
      const res = await Api.put('/api/user/update-info', data, {
        headers: {
          Authorization: `Bearer ${token}`, // Sending the JWT token
        }
      });
      return res;
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  };
  
// Forgot Password API
export const forgotPasswordApi = (data) => Api.post('/api/user/forgot_password', data)

// Verify Otp and set new password API
export const verifyOtpApi = (data) => Api.post('/api/user/verify_otp', data)

>>>>>>> Stashed changes
