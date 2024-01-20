import React from 'react'
import { Outlet } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <div>
            Not Found 404
        </div>
        <Outlet />
   </div>
  )
}

export default NotFound