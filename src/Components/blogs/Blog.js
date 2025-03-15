import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './Blog.css'
import swal from 'sweetalert'

export default function Blog(props) {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isBlogDeleted, setIsBlogDeleted] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    getBlogs()
  }, [isBlogDeleted, currentPage, itemsPerPage])

  const getBlogs = async() => {
    let uri = `http://localhost:5000/api/blog?page=${currentPage}&limit=${itemsPerPage}`
    let headerData = {}
    if (props.id === 'user_id') {
      const token = localStorage.getItem('token')
      uri = `http://localhost:5000/api/blog/my-blog?page=${currentPage}&limit=${itemsPerPage}`
      headerData = {
        'Authorization': `Bearer ${token}`
      }
    }
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: uri,
      headers: headerData
    };

    try {
      const blogDatas = await axios.request(config)
      if (blogDatas.status === 200) {
        setBlogs(blogDatas.data.data)
        setTotalItems(blogDatas.data.total)
        setIsLoading(false)
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  const handleBlogDelete = async (e, id) => {
    e.preventDefault()
    
    const token = localStorage.getItem('token')
    
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/blog/'+id,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const deleteBlog = await axios.request(config)
      if (deleteBlog.status === 200) {

        swal("Success!", deleteBlog.data.message, "success");
        setIsBlogDeleted(true)
      }
    } catch (err) {
      throw new Error(err)
    }

  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <button key={number} onClick={() => handleClick(number)} disabled={number === currentPage}>
        {number}
      </button>
    ));
  };

  return (
    <>
      <div className='container'>
        <div>
          <h2 className="text-center">Blogs</h2>
        </div>
        {isLoading ?
        <div className="text-center">
          <div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        :
        <div className='row'>
          { blogs.length > 0 && blogs.map((blog) => (
            <div className='col-md-4'>
              <div className="card">
                <img src={`http://localhost:5000${blog.image}`} className="card-img-top" alt="..." height={150} />
                <div className="card-body">
                  <h5 className="card-title"><Link>{blog.title}</Link></h5>
                  <p className="card-text text-justify">{blog.description}</p>
                </div>
                <div className="card-footer">
                  <div className='row'>
                    <div className='col-md-6'>
                      <small className="text-body-secondary">Author : { blog.author.fname } {blog.author.lname} </small>
                    </div>

                    <div className='col-md-6'>
                      { props.isUpdate === true &&
                        <div>
                          <Link className="btn btn-sm btn-primary mr-2" to={`/edit-blog/${blog._id}`}>Edit</Link>
                          <button className="btn btn-sm btn-primary mr-2" onClick={(e) => handleBlogDelete(e, blog._id)}>Delete</button>
                        </div>
                      ||
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
        }
        <div>{renderPageNumbers()}</div>
      </div>
    </>
  )
}
