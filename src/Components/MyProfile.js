import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MyProfile() {
    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        username: ""
    })

    useEffect(() => {
        getUserData()
    }, []);

    const getUserData = async () => {
        const token = localStorage.getItem('token')
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/api/user/user-profile',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const userData = await axios.request(config)
        if (userData.status === 200) {
            const resData = userData.data.data;
            setUserData(resData)
        }
    }

    return (
        <>
            <div className="container">
                <h3 className="text-center">My Profile</h3>
                <div className="col-lg-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="fname" className="text-muted mb-1">
                                <small>First Name</small>
                            </label>
                            <input id="fname" 
                            name="fname" 
                            className="form-control" 
                            type="text" 
                            autoComplete="off"
                            value={userData.fname}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname" className="text-muted mb-1">
                                <small>Last Name</small>
                            </label>
                            <input id="lname" 
                            name="lname" 
                            className="form-control" 
                            type="text"            
                            autoComplete="off"
                            value={userData.lname}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="username" className="text-muted mb-1">
                                <small>Username</small>
                            </label>
                            <input id="username" 
                            name="username" 
                            className="form-control" 
                            type="text"            
                            autoComplete="off"
                            value={userData.username}
                            />
                        </div>

                        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                        Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}