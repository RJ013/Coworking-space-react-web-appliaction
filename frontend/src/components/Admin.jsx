import React, { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

const Admin = ({ auth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is not authenticated or logged out
    if (auth !== 'true') {
      // Redirect to the login page
      navigate('/signin', { replace: true });
    }
  }, [auth, navigate]);

  return auth === 'true' ? <Outlet /> : null;
};

export default Admin;