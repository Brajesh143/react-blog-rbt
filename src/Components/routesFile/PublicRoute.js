import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About'
import Blog from '../Blog'
import HomeGuest from '../HomeGuest'
import Terms from '../Terms'

export default function PublicRoute() {
  return (
    <Routes>
        <Route path='/'element={<HomeGuest />} />
        <Route path='/about-us'element={<About />} />
        <Route path='/terms'element={<Terms />} />
        <Route path='/blog'element={<Blog />} />
    </Routes>
  )
}
