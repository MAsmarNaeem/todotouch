import { useState } from "react"
import {auth,signInWithEmailAndPassword } from '../config/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const usetodo=()=>
{
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    const submithandler=async()=>
    {
        try {
            await signInWithEmailAndPassword(auth,email,password)  
        toast.success("hlo")
        
        } catch (error) {
            
        }
    }

    return(
       {
        email,
        setemail,
        password,
        setpassword,
        submithandler
       }
    )

}
export default usetodo