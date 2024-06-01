import React from "react";
import CreateBlog from "./CreateBlog";
import { useParams } from "react-router-dom";

export default function UpdateBlog() {
    const params = useParams()

    return (
        <>
            <CreateBlog title="Update Blog" isBlogUpdate={true} blogId={params.id} />
        </>
    )
}