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

export default function PublicRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomeGuest />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-blog' element={<MyBlog />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/edit-blog/:id' element={<UpdateBlog />} />
        <Route path='/delete-blog/:id' element={<MyBlog />} />
    </Routes>
  )
}
