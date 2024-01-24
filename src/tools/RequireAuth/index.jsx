import React from 'react'
import { Navigate } from 'react-router-dom'
const RequireAuth = ({children}) => {
    const Auth = localStorage.getItem('token');
    if (!Auth) {
        return <Navigate to='/login' />
    }
  return children;
}

export default RequireAuth  