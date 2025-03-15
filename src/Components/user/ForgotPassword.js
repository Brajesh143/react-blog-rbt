import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

export default function ForgotPassword() {
    const [userInput, setUserInput] = useState({
        username: ""
    })

    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    const validation = () => {
        let newErrors = {}
        
        if (!userInput.username) newErrors.username = "username is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleForgotPassword = async(e) => {
        e.preventDefault()

        if (validation()) {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:5000/api/user/forgot-password',
                headers: { },
                data: userInput
            };

            const forgotPassword = await axios.request(config)
            if (forgotPassword.status === 200) {
                swal("Success!", forgotPassword.data.message, "success");

                setUserInput({
                    username: ""
                })
            }
            
        }
    }

    return (
        <>
            <div className="container">
                <h3 className="text-center">Forgot Password</h3>
                
                <div className="col-lg-12">
                    <form onSubmit={handleForgotPassword}>
                        <div className="form-group">
                            <label htmlFor="username" className="text-muted mb-1">
                                <small>Username</small>
                            </label>
                            <input id="username" 
                            name="username" 
                            className="form-control" 
                            type="text" 
                            autoComplete="off"
                            value={userInput.username}
                            onChange={handleInput}
                            />
                            {errors.username && <span>{errors.username}</span>}
                        </div>

                        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                        SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}