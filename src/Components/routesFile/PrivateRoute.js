import React, { useContext } from "react";
import { MyContext } from "../../MyContext";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const {data, setData} = useContext(MyContext)

    if (!data.isAuth) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/" />
    }

    // authorized so return child components
    return children;
}