import React, { useContext } from "react"
import {Link}  from 'react-router-dom'
import axios from "axios"
import swal from "sweetalert"
// import { useDispatch, useSelector } from "react-redux"
// import { clearUser, setUser } from "../redux/userSlice"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { MyContext } from "../../MyContext"

function HeaderLoggedOut(props) {
  const {data, setData} = useContext(MyContext)

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const handleLogout = async(e) => {
    e.preventDefault()

    const token = localStorage.getItem('token')

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/user/logout',
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };

    const userLogout = await axios.request(config)
    if (userLogout.status === 200) {
      const userRes = userLogout.data
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      swal('Success!', userRes.message, 'success')
      props.setisUserLoggedIn(false)
      setData({
        isAuth: false,
        fname: "",
        lname: "",
        username: "",
        token: ""
      })
    }
  }

  return (
    <div style={{ display: "contents" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="btn btn-sm text-white fs-lg" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm text-white fs-lg" to="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm text-white fs-lg" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-sm text-white fs-lg" to="/product">Product</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Link to="/cart" className="btn btn-primary position-relative" style={{ marginRight: "20px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {data?.cartCount}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>

      { data && 
        <DropdownButton id="dropdown-basic-button" title={ data?.fname ? data?.fname : ''}>
          <Dropdown.Item>
            <Link className="btn btn-sm" to="/my-profile">My Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className="btn btn-sm" to="/my-blog">My Blog</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link className="btn btn-sm" to="/create-blog">Create Post</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={handleLogout} className="btn btn-sm">Sign Out</button>
          </Dropdown.Item>
        </DropdownButton>
      }
    </div>
  )
}

export default HeaderLoggedOut
