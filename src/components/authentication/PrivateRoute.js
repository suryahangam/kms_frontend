// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from './TokenService';

const PrivateRoute = ({ element, fallbackPath = '/login' }) => {
  return getToken() ? (
    <Route element={element} />
  ) : (
    <Navigate to={fallbackPath} replace />
  );
};

export default PrivateRoute;
