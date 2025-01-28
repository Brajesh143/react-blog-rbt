import React, { useContext } from "react"
import {Link}  from 'react-router-dom'
import axios from "axios"
import swal from "sweetalert"
// import { useDispatch, useSelector } from "react-redux"
// import { clearUser, setUser } from "../redux/userSlice"
import { MyContext } from "../MyContext"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
      // dispatch(clearUser());
    }
  }

  return (
    // <div>
    //   <img src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" height={40} width={40} alt="profile-image" /><span>Hello</span>
    //     <div class="dropdown show">
    //       <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //         Dropdown link
    //       </a>

    //       <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    //         <a class="dropdown-item" href="#">Action</a>
    //         <a class="dropdown-item" href="#">Another action</a>
    //         <a class="dropdown-item" href="#">Something else here</a>
    //       </div>
    //     </div>
    // </div>
    <div className="flex-row my-6 my-md-0" style={{ display: 'flex' }}>
      {/* <Link className="btn btn-sm btn-primary mr-2" to="/my-profile">My Profile</Link> */}
      <Link className="btn btn-sm btn-primary mr-2" to="/my-blog">My Blog</Link>
      <Link className="btn btn-sm btn-primary mr-2" to="/create-blog">Create Post</Link>

      {/* <button  
        onClick={handleLogout}
        className="btn btn-sm btn-primary">
        Sign Out
      </button> */}
      
      <button type="button" class="btn btn-primary position-relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>

      <DropdownButton id="dropdown-basic-button" title={`${data.fname}`}>
        <Dropdown.Item href="/my-profile">Action</Dropdown.Item>
        <Dropdown.Item>
          <button onClick={handleLogout} className="btn btn-sm btn-light">Sign Out</button>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  )
}

export default HeaderLoggedOut
