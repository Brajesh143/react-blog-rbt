import React, { useState } from "react"
import Page from "./Page"
import axios from "axios"
import swal from "sweetalert"

function HomeGuest() {
  const [ userInput, setUser ] = useState({
    fname: "",
    lname: "",
    username: "",
    password: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({...userInput, [name]: value })
  }

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {};
      if (!userInput.fname.trim()) newErrors.fname = 'first name is required';
      if (!userInput.lname.trim()) newErrors.lname = 'last name is required';
      if (!userInput.username) {
          newErrors.username = 'username is required';
      } else if (!/\S+@\S+\.\S+/.test(userInput.username)) {
          newErrors.username = 'username is invalid';
      }
    if (!userInput.password) {
        newErrors.password = 'password is required';
    } else if (userInput.password.length < 8) {
        newErrors.password = 'password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault()
    
    if (validate()) {
      const userData = await axios.post('http://localhost:5000/api/user/signup', userInput)
      if (userData.status === 201) {
        const resData = userData.data
        swal("Success!", resData.message, "success");

        setUser({
          fname: "",
          lname: "",
          username: "",
          password: ""
        })
      }
    }
  }
 
  return (
    <Page title="Welcome!" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Remember Writing?</h1>
          <p className="lead text-muted">Are you sick of short tweets and impersonal &ldquo;shared&rdquo; posts that are reminiscent of the late 90&rsquo;s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="fname-register" className="text-muted mb-1">
                <small>FirstName</small>
              </label>
              <input id="fname-register" 
              name="fname" 
              className="form-control" 
              type="text" 
              autoComplete="off"
              value={userInput.fname}
              onChange={handleInput} />
              {errors.fname && <span>{errors.fname}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lname-register" className="text-muted mb-1">
                <small>LastName</small>
              </label>
              <input id="lname-register" 
              name="lname" 
              className="form-control" 
              type="text"            
              autoComplete="off"
              value={userInput.lname} 
              onChange={handleInput} />
              {errors.lname && <span>{errors.lname}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>UserName</small>
              </label>
              <input id="username-register" 
              name="username" 
              className="form-control" 
              type="text"
              value={userInput.username}
              onChange={handleInput} />
              {errors.username && <span>{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input id="password-register" 
              name="password" 
              className="form-control" 
              type="password"
              value={userInput.password}
              onChange={handleInput} />
              {errors.password && <span>{errors.password}</span>}
            </div>

            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block" 
           >
              Sign up for ComplexApp
            </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
