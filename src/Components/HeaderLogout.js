import React, { useContext } from "react"
import {Link}  from 'react-router-dom'
import axios from "axios"
import swal from "sweetalert"
import { MyContext } from "../MyContext"

function HeaderLoggedOut(props) {
  const {data, setData} = useContext(MyContext)

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
    <div className="flex-row my-3 my-md-0">
      <Link className="btn btn-sm btn-success mr-2" to="/my-profile">My Profile</Link>
      <Link className="btn btn-sm btn-success mr-2" to="/my-blog">My Blog</Link>
      <Link className="btn btn-sm btn-success mr-2" to="/create-blog">Create Post</Link>
      <button  
        onClick={handleLogout}
        className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  )
}

export default HeaderLoggedOut
