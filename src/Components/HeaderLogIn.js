import React, { useContext, useState } from "react"
import axios from "axios"
import swal from "sweetalert"
import { Link } from "react-router-dom"
import { MyContext } from "../MyContext"

function HeaderLogIn(props) {
  const { data, setData } = useContext(MyContext)
  const [userInput, setUser] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({...userInput, [name]: value })
  }

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

  const handleLogin = async (e) => {
    e.preventDefault()
    if (validation()) {
      const userData = await axios.post('http://localhost:5000/api/user/login', userInput)
      if (userData.status === 200) {
        props.setisUserLoggedIn(true)
        const resData = userData.data 
        const user_data_to_save = {
          fname: resData.data.fname,
          lname: resData.data.lname,
          username: resData.data.username
        }

        const token = resData.token
        localStorage.setItem('user', JSON.stringify(user_data_to_save))
        localStorage.setItem('token', token)

        setData({
          isAuth: true,
          fname: resData.data.fname,
          lname: resData.data.lname,
          username: resData.data.username,
          token: token
        })

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
          onChange={handleInput} />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input  name="password" 
          className="form-control form-control-sm input-dark" 
          type="password" 
          placeholder="Password"
          value={userInput.password} 
          onChange={handleInput} />
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
