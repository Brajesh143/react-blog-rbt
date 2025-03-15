import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

export default function ResetPassword() {
    const [userInput, setUserInput] = useState({
        password: "",
        newPassword: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        // const {name, value} = e.target
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    const validation = () => {
        let newError = {}

        if (!userInput.password) newError.password = "password is required"

        if (!userInput.newPassword) newError.newPassword = "new password is required"

        if (!userInput.confirmPassword) {
            newError.confirmPassword = "confirm password is required"
        } else if (userInput.newPassword !== userInput.confirmPassword) {
            newError.confirmPassword = "confirm password not matched"
        }

        setErrors(newError)
        return Object.keys(newError).length === 0;
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()

        if (validation()) {
            const token = localStorage.getItem('token')
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:5000/api/user/reset-password',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: userInput
            };

            const resetPassword = await axios.request(config)
            if (resetPassword.status === 200) {
                swal("Success!", resetPassword.data.message, "success");

                setUserInput({
                    password: "",
                    newPassword: "",
                    confirmPassword: ""
                })
            }
        }
    }

    return (
        <>
            <div className="container">
                <h3 className="text-center">Reset Password</h3>
                
                <div className="col-lg-12">
                    <form onSubmit={handleResetPassword}>
                        <div className="form-group">
                            <label htmlFor="password" className="text-muted mb-1">
                                <small>Password</small>
                            </label>
                            <input id="password" 
                            name="password" 
                            className="form-control" 
                            type="password" 
                            autoComplete="off"
                            value={userInput.password}
                            onChange={handleInput}
                            />
                            {errors.password && <span>{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="new_password" className="text-muted mb-1">
                                <small>New Password</small>
                            </label>
                            <input id="new_password" 
                            name="newPassword" 
                            className="form-control" 
                            type="password"            
                            autoComplete="off"
                            value={userInput.newPassword}
                            onChange={handleInput}
                            />
                            {errors.newPassword && <span>{errors.newPassword}</span>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="confirm_password" className="text-muted mb-1">
                                <small>Confirm Password</small>
                            </label>
                            <input id="confirm_password" 
                            name="confirmPassword" 
                            className="form-control" 
                            type="password"            
                            autoComplete="off"
                            value={userInput.confirmPassword}
                            onChange={handleInput}
                            />
                            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                        </div>

                        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                        Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}