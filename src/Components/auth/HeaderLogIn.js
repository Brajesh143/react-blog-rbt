import React, { useContext, useState } from "react"
import swal from "sweetalert"
import { Link } from "react-router-dom"
import { MyContext } from "../../MyContext"
import { sendRequest } from "../../utils/service"
// import { useDispatch, useSelector } from "react-redux"
// import { clearUser, handleLogin, setUser } from "../redux/userSlice"
// import { createAsyncThunk } from "@reduxjs/toolkit"

function HeaderLogIn(props) {
  const { data, setData } = useContext(MyContext)
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const [userInput, setUser] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  // const handleInput = (e) => {
  //   const { name, value } = e.target
  //   setUser({...userInput, [name]: value })
  // }

  const validation = () => {
    let newErrors = {}
    if (!userInput.username.trim()) newErrors.username = 'username is required'
    if (!userInput.password.trim()) {
      newErrors.password = 'password is required'
    } else if (userInput.password.length < 8) {
      newErrors.password = 'password must be at least 8 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validation()) {
  //     try {
  //       const loginData = await dispatch(handleLogin(userInput));
  //       console.log(loginData)
  //       if (loginData.status === 200) {
  //         props.setisUserLoggedIn(true)
  //         const resData = loginData.data 
  //         const user_data_to_save = {
  //           fname: resData.data.fname,
  //           lname: resData.data.lname,
  //           username: resData.data.username
  //         }
        
  //         const token = resData.token
  //         localStorage.setItem('user', JSON.stringify(user_data_to_save))
  //         localStorage.setItem('token', token)

  //         dispatch(setUser({
  //           isAuth: true,
  //           fname: resData.data.fname,
  //           lname: resData.data.lname,
  //           username: resData.data.username,
  //           token: token
  //         }));
          
  //         swal("Success!", resData.message, "success");
  //       }
  //     } catch (err) {
  //       console.error('Login failed:', err);
  //     }
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault()
    if (validation()) {
      const userData = await sendRequest('post', 'user/login', userInput)
      if (userData.status === 200) {
        props.setisUserLoggedIn(true)

        const resData = userData.data
        const user_data_to_save = {
          isAuth: true,
          fname: resData.data.fname,
          lname: resData.data.lname,
          username: resData.data.username,
          cartCount: resData.cartCount
        }

        const token = resData.token
        localStorage.setItem('user', JSON.stringify(user_data_to_save))
        localStorage.setItem('token', token)
        localStorage.setItem('tokenExpiry', Date.now() + 60 * 60 * 1000);

        setData({
          isAuth: true,
          fname: resData.data.fname,
          lname: resData.data.lname,
          username: resData.data.username,
          token: token,
          cartCount: resData.cartCount
        })

        // dispatch(setUser({
        //   isAuth: true,
        //   fname: resData.data.fname,
        //   lname: resData.data.lname,
        //   username: resData.data.username,
        //   token: token
        // }));

        swal("Success!", resData.message, "success");

        setUser({
          username: '',
          password: ''
        })
      }
    }
  }

  return (
    <form className="mb-0 pt-2 pt-md-0" onSubmit={handleLogin}>
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input name="username" 
          className="form-control form-control-sm input-dark" 
          type="text" 
          placeholder="Username" 
          autoComplete="off"
          value={userInput.username}
          onChange={(e) => setUser({ ...userInput, username: e.target.value })}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0" style={{ marginTop: "25px"}}>
          <input name="password" 
          className="form-control form-control-sm input-dark" 
          type="password" 
          placeholder="Password"
          value={userInput.password} 
          onChange={(e) => setUser({ ...userInput, password: e.target.value })} />
          {errors.password && <span>{errors.password}</span>}
          <span><Link to={`/forgot-password`} className="forgot-password">forgot password?</Link></span>
        </div>
        
        <div className="col-md-auto">
          <button type="submit" className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default HeaderLogIn
