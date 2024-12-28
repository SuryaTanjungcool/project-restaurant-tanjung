import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const authToken = localStorage.getItem('authToken'); // Memeriksa token di localStorage

  // Jika token ada, render komponen, jika tidak, arahkan ke halaman login
  return authToken ? element : <Navigate to="/akunlogin" />;
};

export default PrivateRoute;
 