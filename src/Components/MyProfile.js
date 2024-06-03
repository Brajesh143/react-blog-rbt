import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

export default function MyProfile() {
    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        username: "",
        profile_image: ""
    })

    const [file, setFile] = useState()

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
            console.log(resData)
            setUserData(resData)
            // setFile(resData.profile_image)
        }
    }

    const handleUserInput = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFile(files[0]);
        } else {
            setUserData({...userData, [name]: value});
        }
        // setUserData({...userData, [e.target.name]: e.target.value})
        // setFile(e.target.files[0])
    }

    const handleProfileUpdate = async (e) => {
        e.preventDefault()
        
        const formData = new FormData();

        formData.append('fname', userData.fname);
        formData.append('lname', userData.lname);
        formData.append('username', userData.username);
        if (file) {
            formData.append('image', file);
        }

        const token = localStorage.getItem('token')

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/api/user/user-update',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        };

        const updateUserData = await axios.request(config)
        if (updateUserData.status === 200) {
            
            swal("Success!", updateUserData.data.message, "success");
        }
    }

    return (
        <>
            <div className="container">
                <h3 className="text-center">My Profile</h3>
                <div className="col-lg-12">
                    <form onSubmit={handleProfileUpdate} >
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
                            onChange={handleUserInput}
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
                            onChange={handleUserInput}
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
                            onChange={handleUserInput}
                            />
                        </div>

                        
                        {userData.profile_image && (
                        <div className="form-group">
                            <img src={`http://localhost:5000${userData.profile_image}`} alt="Profile_image" style={{ width: '150px', height: '150px' }} />
                        </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="profile_image" className="text-muted mb-1">
                                <small>Profile Image</small>
                            </label>
                            <input id="profile_image" 
                            name="file" 
                            className="form-control" 
                            type="file"            
                            autoComplete="off"
                            onChange={handleUserInput}
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