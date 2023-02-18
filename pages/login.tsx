
import uselogin from '../hooks/uselogin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const login=()=>
{
    const
    {
        email,
        setemail,
        password,
        setpassword,
        submithandler,
    
    }=uselogin()
   
   
    return(
        <div>
            <h2>login</h2>
<input onChange={(e)=>setemail(e.target.value)} type="email" />
<input onChange={(e)=>setpassword(e.target.value)} type="password" />

<button onClick={submithandler}>submit</button>
        </div>
    )
}
