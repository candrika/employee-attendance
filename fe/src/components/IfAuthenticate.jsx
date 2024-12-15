import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function ProtectedRoute({children}){
    const isAuth = useSelector((state)=>state.auth.isLogged)
    const is_logged=localStorage.getItem("is_logged")
    
    return is_logged ? children:<Navigate to="/"/>
}