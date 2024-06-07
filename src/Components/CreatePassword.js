import React from "react";

export default function CreatePassword() {
    return (
        <>
            <div className="container">
                <h3 className="text-center">Create Password</h3>
                
                <div className="col-lg-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="password" className="text-muted mb-1">
                                <small>Password</small>
                            </label>
                            <input id="password" 
                            name="password" 
                            className="form-control" 
                            type="password" 
                            autoComplete="off"
                            />
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
                            />
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