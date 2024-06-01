import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

export default function CreateBlog(props) {
    const [blogInput, setBlogData] = useState({
        title: "",
        category: "",
        description: ""
    })

    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setBlogData({...blogInput, [e.target.name] : e.target.value})
    }

    const validation = () => {
        let newError = {}
        if (!blogInput.title.trim()) newError.title = "title is required"

        if (!blogInput.category.trim()) newError.category = "category is required"

        if (!blogInput.description) newError.description = "description is required"

        setErrors(newError)
        return Object.keys(newError).length === 0;
    }

    const handleCreateBlog = async (e) => {
        e.preventDefault()

        if (validation()) {
            const token = localStorage.getItem('token')
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:5000/api/blog/create',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: blogInput
            };
            const createBlog = await axios.request(config)
            const resData = createBlog.data
            if (createBlog.status === 201) {
                swal("Success!", resData.message, "success");

                setBlogData({
                    title: '',
                    category: '',
                    description: ''
                })
            }
        }
    }

    useEffect(() => {
        if (props.isBlogUpdate) {
            getBlogData()
        }
    }, [])

    
    const getBlogData = async () => {
        const blog_id = props.blogId
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/api/blog/blog-detail/'+blog_id,
            headers: { }
        }

        try {
            const getBlogData = await axios.request(config)
            if (getBlogData.status === 200) {
                setBlogData(getBlogData.data.data)
            }
        } catch (err) {
        throw new Error(err)
        }
    }

    const handleUpdateBlog = async (e) => {
        const blog_id = props.blogId
        e.preventDefault()

        if (validation()) {
            const token = localStorage.getItem('token')
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: 'http://localhost:5000/api/blog/'+blog_id,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: blogInput
            };
            const updateBlog = await axios.request(config)
            const resUpdateData = updateBlog.data
            if (updateBlog.status === 200) {
                swal("Success!", resUpdateData.message, "success");
            }
        }
    }

    return (
        <>
            <div className="container">
                <h3 className="text-center">{props.isBlogUpdate && 'Update' || 'Create' } Blog</h3>
                <div className="col-lg-12">
                    <form onSubmit={ props.isBlogUpdate && handleUpdateBlog || handleCreateBlog }>
                        <div className="form-group">
                            <label htmlFor="title" className="text-muted mb-1">
                                <small>Title</small>
                            </label>
                            <input id="title" 
                            name="title" 
                            className="form-control" 
                            type="text" 
                            autoComplete="off"
                            value={blogInput.title}
                            onChange={handleInput}
                            />
                            {errors.title && <span>{errors.title}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="category" className="text-muted mb-1">
                                <small>Category</small>
                            </label>
                            <input id="category" 
                            name="category" 
                            className="form-control" 
                            type="text"            
                            autoComplete="off"
                            value={blogInput.category}
                            onChange={handleInput}
                            />
                            {errors.category && <span>{errors.category}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="text-muted mb-1">
                                <small>Description</small>
                            </label>
                            <textarea
                                id="description"
                                className="form-control"
                                name="description"
                                rows={4}
                                type="text"            
                                autoComplete="off"
                                value={blogInput.description}
                                onChange={handleInput}
                            />
                            {errors.description && <span>{errors.description}</span>}
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