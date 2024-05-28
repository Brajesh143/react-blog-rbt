import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import '../Blog.css'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/blog',
      headers: { }
    };

    try {
      const blogDatas = await axios.request(config)
      if (blogDatas.status === 200) {
        setBlogs(blogDatas.data.data)
        setIsLoading(false)
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return (
    <>
      <div className='container'>
        <div>
          <h2 className="text-center">Blogs</h2>
        </div>
        {isLoading ?
        <div class="text-center">
          <div class="spinner-border m-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        :
        <div className='row'>
          { blogs.length > 0 && blogs.map((blog) => (
            <div className='col-md-4'>
              <div class="card">
                <img src="https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title"><Link>{blog.title}</Link></h5>
                  <p class="card-text text-justify">{blog.description}</p>
                </div>
                <div class="card-footer">
                  <div className='row'>
                    <div className='col-md-6'>
                      <small class="text-body-secondary">Author : { blog.author.fname } {blog.author.lname} </small>
                    </div>

                    <div className='col-md-6'>
                      <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
        }
      </div>
    </>
  )
}
