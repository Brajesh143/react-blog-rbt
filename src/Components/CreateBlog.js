import React from "react";

export default function CreateBlog() {
    return (
        <>
            <div className="container">
                <h3 className="text-center">Create Blog</h3>
                <div className="col-lg-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title" className="text-muted mb-1">
                                <small>Title</small>
                            </label>
                            <input id="title" 
                            name="title" 
                            className="form-control" 
                            type="text" 
                            autoComplete="off"
                            />
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
                            />
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
                            />
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