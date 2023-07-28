import {useNavigate} from "react-router-dom"
import CartContext from "../../context"

import "./index.css"
import Cookies from "js-cookie"
const Header=()=>{
    const navigate=useNavigate()
 return(
    <CartContext.Consumer>
        {value=>{
            const {cartList,setText}=value
            const res=cartList.length>0?`:${cartList.length}`:null
            const text=(event)=>{
                setText(event.target.value)
            }
            const logout=()=>{
                navigate("/")
                Cookies.remove("result")
            }
            return(
            <div className="navbar">
            <div className="title">
                <p>Arigala's <br/>web shop</p>
            </div>
            <div className="search">
            <input type="search" onChange={text} />
            </div>
            <div className="list">
            <ul>
                <li onClick={()=>{navigate("/cart",{replace:true})}}>Cart{res}</li>
                <li onClick={logout}>Logout</li>
                <li><a href="https://github.com/ARIGALAASHOKKUMAR/" target="_blank" rel="nothing">About</a></li>
            </ul>
    
            </div>
        </div>
            )
        }}
    </CartContext.Consumer>
    )
}

export default Header