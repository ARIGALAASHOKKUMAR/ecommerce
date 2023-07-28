import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import img2 from "../images/img2.jpg"
import "./index.css"

const Login=()=>{

    const [username,setusername]=useState("")
    const [pwd,setpwd]=useState("")
    const [res,setres]=useState("")

    const history = useNavigate();

    const onsubmit=(event)=>{
        event.preventDefault();
        const savedusername=localStorage.getItem("username")
        const savedpwd=localStorage.getItem("pwd")
        Cookies.set("result","success")
        setusername("")
        setpwd("")
        if(savedusername===username && savedpwd===pwd){
            history("/home")
        }
        else{
            setres("*Incorrect username or password")
        }
    }

    const usernamefunc=(e)=>{
        setusername(e.target.value)
        if(username.length===0 || pwd.length===0){
            setres("")
        }
    }

    const pwdfunc=(e)=>{
        setpwd(e.target.value)
        if(username.length===0 || pwd.length===0){
            setres("")
        }
    }

    return(
    <div className="bg">
        <form className="form">
            <div className="inner-form">
                <h1>Login Form</h1>
                <label>User Name</label>
                <br />
                <input type="text" onChange={usernamefunc} />
                <br />
                <label>Password</label>
                <br />
                <input type="password" onChange={pwdfunc}/>
                <br />
                <div className='btn'>
                <button type="submit" onClick={onsubmit}>Submit</button>
                </div>
                <p className="res">{res}</p>
                <p>New User?<Link to="/signup" className="signup">SignUp</Link></p>
            </div>
            <img src={img2} alt="no-data" className='l-image'/>
        </form>  
    </div>   
)
}
 
export default Login