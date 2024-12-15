import {useState, useEffect} from 'react'
import instance from '@/lib/axios'
import { useNavigate } from "react-router-dom";

export default function Logout(){
    const navigate= useNavigate()
    useEffect(()=>{
        instance.post('/logout',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Sesuaikan pengambilan token Anda
                }
            }
        )
        .then((resp)=>{
            console.log(resp)
            if(resp.data.status){
                navigate('/login')
            }
        })
        .catch(err=>{

        })
    },[])
}