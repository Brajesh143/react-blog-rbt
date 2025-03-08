import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About'
import Blog from '../Blog'
import CreateBlog from '../CreateBlog'
import HomeGuest from '../HomeGuest'
import MyBlog from '../MyBlog'
import MyProfile from '../MyProfile'
import Terms from '../Terms'
import UpdateBlog from '../UpdateBlog'
import ResetPassword from '../ResetPassword'
import ForgotPassword from '../ForgotPassword'
import PrivateRoute from './PrivateRoute'
import CreatePassword from '../CreatePassword'
import Product from '../Product'
import { Cart } from '../cart/Cart'

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
