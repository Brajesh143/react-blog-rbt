import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../blogs/Blog'
import MyProfile from '../user/MyProfile'
import UpdateBlog from '../blogs/UpdateBlog'
import ResetPassword from '../user/ResetPassword'
import ForgotPassword from '../user/ForgotPassword'
import PrivateRoute from './PrivateRoute'
import CreatePassword from '../user/CreatePassword'
import Product from '../products/Product'
import { Cart } from '../cart/Cart'
import HomeGuest from '../auth/HomeGuest'
import MyBlog from '../blogs/MyBlog'
import About from '../pages/About'
import CreateBlog from '../blogs/CreateBlog'
import Terms from '../pages/Terms'

export default function PublicRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomeGuest />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/product' element={<Product />} />
        <Route path='/my-profile' element={<PrivateRoute><MyProfile /></PrivateRoute>} />
        {/* <PrivateRoute path='/my-blog' element={<MyBlog />} /> */}
        {/* <Route path='/my-blog' element={<MyBlog />} /> */}
        <Route path="/my-blog" element={<PrivateRoute><MyBlog /></PrivateRoute>} />
        <Route path='/create-blog' element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
        <Route path='/edit-blog/:id' element={<PrivateRoute><UpdateBlog /></PrivateRoute>} />
        <Route path='/delete-blog/:id' element={<PrivateRoute><MyBlog /></PrivateRoute>} />
        <Route path='/reset-password' element={<PrivateRoute><ResetPassword /></PrivateRoute>} />
        <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-password' element={<CreatePassword />} />
    </Routes>
  )
}
