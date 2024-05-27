import React from "react"
import {Link}  from 'react-router-dom'
import axios from "axios"
import swal from "sweetalert"


function HeaderLoggedOut(props) {
  const handleLogout = async(e) => {
    e.preventDefault()

    const token = localStorage.getItem('token')
    console.log(token)
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
